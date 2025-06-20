/** @format */
"use server";

import db from "@/modules/db";

/**
 * Logs server-side actions; replace with remote logging service in production.
 */
async function logServer(message, meta = {}) {
  console.log(`[GetUserGoogleDriveFolderId] ${message}`, meta);
  // Example replacement:
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
      await logServer("User not found.", { userId });
      return {
        id: userId,
        googleDriveFolderId: null,
        errorMessage: "User not found.",
        success: false,
      };
    }

    if (!user.googleDriveFolderId) {
      await logServer("Google Drive folder ID missing for user.", { userId });
      return {
        id: userId,
        googleDriveFolderId: null,
        errorMessage: "Google Drive folder not configured for this user.",
        success: false,
      };
    }

    await logServer("Successfully retrieved Google Drive folder ID.", {
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
    await logServer("Error retrieving folder ID from DB", {
      userId,
      error: error.message,
    });

    return {
      id: userId,
      googleDriveFolderId: null,
      errorMessage: "Failed to fetch folder ID due to a database error.",
      success: false,
    };
  }
}
