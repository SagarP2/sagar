import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { handleApiError } from "@/lib/errors";
import { contactFormSchema } from "@/lib/validations/contact";
import { ContactApiResponse } from "@/types/portfolio";

export async function POST(req: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // 1. IP & Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimitResult = rateLimit(`contact_api_${ip}`, {
      limit: 5,
      windowMs: 60 * 1000, // 5 requests per 60 seconds
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: `Too many contact requests from this IP. Please wait ${rateLimitResult.reset} seconds before trying again.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.reset),
            "X-RateLimit-Limit": String(rateLimitResult.limit),
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
            "X-RateLimit-Reset": String(rateLimitResult.reset),
          },
        }
      );
    }

    // 2. Parse request body
    const body: unknown = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid request payload." },
        { status: 400 }
      );
    }

    // 3. Strict Server-side Input Validation via shared Zod schema
    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = String(issue.path[0] ?? "");
        if (path) {
          fieldErrors[path] = issue.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed for provided contact fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, service, budget, message } = validation.data;

    // 4. Server-Side Execution & Logging
    console.info(
      `[Contact Form Received] Subject: "${subject}" from ${name} <${email}> (${service}, Budget: ${budget})`
    );
    console.info(`[Message Body]: ${message}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your project specification has been securely delivered!",
        data: {
          timestamp: new Date().toISOString(),
          referenceId: `REF-${Math.floor(100000 + Math.random() * 900000)}`,
        },
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(rateLimitResult.limit),
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
        },
      }
    );
  } catch (error) {
    return handleApiError(error) as NextResponse<ContactApiResponse>;
  }
}
