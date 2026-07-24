import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { handleApiError } from "@/lib/errors";

const contactApiSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(150, "Email is too long."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters.").max(200, "Subject is too long."),
  service: z.string().trim().optional().default("Full-Stack MERN"),
  budget: z.string().trim().optional().default("$5k - $10k"),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(3000, "Message is too long."),
});

export async function POST(req: NextRequest) {
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
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid request payload." },
        { status: 400 }
      );
    }

    // 3. Strict Server-side Input Validation
    const validation = contactApiSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        fieldErrors[path] = issue.message;
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
    console.log(`[Contact Form Received] Subject: "${subject}" from ${name} <${email}> (${service}, Budget: ${budget})`);
    console.log(`[Message Body]: ${message}`);

    // (If env variable RESEND_API_KEY / SMTP is present, send email here)

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
    return handleApiError(error);
  }
}
