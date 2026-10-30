import { NextResponse } from "next/server";

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 400, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export interface ErrorResponseBody {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

/**
 * Formats API error responses consistently while preventing internal implementation leakage.
 */
export function handleApiError(error: unknown): NextResponse<ErrorResponseBody> {
  console.error("[API Error Encountered]:", error);

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: error.statusCode }
    );
  }

  return NextResponse.json(
    {
      success: false,
      message: "An unexpected error occurred while processing your request. Please try again later.",
    },
    { status: 500 }
  );
}
