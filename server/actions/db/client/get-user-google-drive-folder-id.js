/** @format */
"use server";

import db from "@/modules/db";
import { createErrorResponse } from "@/utils/errors/error-response";

/**
 * Logs server-side actions; replace with remote logging service in production.
 */
async function logServer(message, meta = {}) {
  console.log(`[GetUserGoogleDriveFolderId] ${message}`, meta);
  // Example for production:
  // Sentry.captureMessage(message, { extra: meta });
}

/**
 * Fetches the Google Drive folder ID associated with a user.
 */
export async function GetUserGoogleDriveFolderId(userId) {
  try {
    const user = await db.userNew.findUnique({
      where: { id: userId },
      select: { googleDriveFolderId: true },
    });

    if (!user) {
      await logServer("❌ User not found.", { userId });
      return createErrorResponse("USER_NOT_FOUND", "User not found.");
    }

    if (!user.googleDriveFolderId) {
      await logServer("⚠️ Google Drive folder ID missing.", { userId });
      return createErrorResponse(
        "NO_DRIVE_ACCESS",
        "Google Drive folder not configured for this user."
      );
    }

    await logServer("✅ Folder ID retrieved.", {
      userId,
      folderId: user.googleDriveFolderId,
    });

    return {
      id: userId,
      googleDriveFolderId: user.googleDriveFolderId,
      errorMessage: "",
      success: true,
    };
  } catch (error) {
    await logServer("🔥 DB fetch error", {
      userId,
      error: error.message,
    });

    return createErrorResponse(
      "DB_ERROR",
      "Failed to fetch folder ID due to a database error."
    );
  }
}
