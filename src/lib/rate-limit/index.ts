/**
 * Sliding Window Rate Limiter for API Routes & Server Actions.
 * Defaults to an in-memory sliding window implementation.
 * Can be configured via environment variables or extended for Redis/Upstash.
 */

interface RateLimitRecord {
  timestamps: number[];
}

class InMemoryRateLimiter {
  private store: Map<string, RateLimitRecord> = new Map();
  private cleanupInterval: number = 60 * 1000; // Cleanup every 60 seconds

  constructor() {
    // Periodically remove stale IPs to prevent memory leaks
    if (typeof window === "undefined") {
      setInterval(() => this.cleanup(), this.cleanupInterval);
    }
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, record] of this.store.entries()) {
      const validTimestamps = record.timestamps.filter((t) => now - t < 3600 * 1000);
      if (validTimestamps.length === 0) {
        this.store.delete(key);
      } else {
        this.store.set(key, { timestamps: validTimestamps });
      }
    }
  }

  /**
   * Check if a request identifier exceeds the specified limit within a window (in milliseconds).
   */
  public check(
    identifier: string,
    limit: number = 5,
    windowMs: number = 60 * 1000
  ): {
    success: boolean;
    limit: number;
    remaining: number;
    reset: number;
  } {
    const now = Date.now();
    const windowStart = now - windowMs;

    const record = this.store.get(identifier) || { timestamps: [] };
    const recentTimestamps = record.timestamps.filter((t) => t > windowStart);

    if (recentTimestamps.length >= limit) {
      const oldestInWindow = recentTimestamps[0];
      const resetTime = oldestInWindow + windowMs;

      return {
        success: false,
        limit,
        remaining: 0,
        reset: Math.ceil((resetTime - now) / 1000),
      };
    }

    recentTimestamps.push(now);
    this.store.set(identifier, { timestamps: recentTimestamps });

    return {
      success: true,
      limit,
      remaining: limit - recentTimestamps.length,
      reset: Math.ceil(windowMs / 1000),
    };
  }
}

const rateLimiterInstance = new InMemoryRateLimiter();

export function rateLimit(
  identifier: string,
  options: { limit?: number; windowMs?: number } = {}
) {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 60 * 1000;

  return rateLimiterInstance.check(identifier, limit, windowMs);
}
