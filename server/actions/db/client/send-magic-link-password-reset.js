/** @format */

"use server";

import db from "@/modules/db";
import { sendMagicLinkEmail } from "@/lib/mail/send-magic-link-email";
import { sendMagicLinkPasswordResetEmail } from "@/lib/mail/send-magic-link-password-reset-email";
import crypto from "crypto";
import { createErrorResponse } from "@/utils/errors/error-response";

export async function SendMagicLinkPasswordReset(email, userId) {
  if (!email || !userId) {
    return createErrorResponse("MISSING_INPUT", "Missing email or user ID.");
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

  try {
    await db.$transaction(async (tx) => {
      await tx.magicLinkToken.create({
        data: {
          email,
          token,
          expiresAt,
          userId,
        },
      });

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

      const url = new URL("/password-reset-confirmation", baseUrl);
      url.searchParams.set("token", token);

      const magicLink = url.toString();

      await sendMagicLinkPasswordResetEmail(email, magicLink);
    });

    return { success: true };
  } catch (error) {
    console.error(`[SendMagicLinkPasswordReset] ERROR for email: ${email}, userId: ${userId}`, error);
    return createErrorResponse("DB_OR_EMAIL_ERROR", "An error occurred while processing the password reset.");
  }
}
