/** @format */

import db from "@/modules/db";
import { createErrorResponse } from "@/utils/errors/error-response";

/**
 * Fetch user registration and related Google Drive folder ID if registration is accepted.
 * @param {string} id - User registration ID
 * @returns {object|null|{success: false, errorCode: string, errorMessage: string}} - User registration info or error object
 */
export async function getUser(id) {
  try {
    if (!id) {
      console.warn("getUser called without a valid ID");
      return createErrorResponse("DB_FETCH_ERROR",
        "An error occurred while fetching user information.");
    }

    const registration = await db.userRegistration.findFirst({
      where: { id },
    });

    if (!registration) {
      console.info(`No registration found for ID: ${id}`);
      return createErrorResponse("DB_FETCH_ERROR",
        "An error occurred while fetching user information.");
    }

    // If user is accepted, fetch associated PDF links
    if (registration.registration === "accepted") {
      const userPdfLinks = await db.userNew.findFirst({
        where: { registrationId: id },
        select: { googleDriveFolderId: true },
      });

      return {
        ...registration,
        googleDriveFolderId: userPdfLinks?.googleDriveFolderId ?? null,
      };
    }

    // Return registration as-is if not accepted
    return {
      ...registration,
      googleDriveFolderId: null,
    };

  } catch (error) {
    console.error(`Database fetch error in getUser for ID: ${id}`, error);
    return createErrorResponse(
      "DB_FETCH_ERROR",
      "An error occurred while fetching user information."
    );
  }
}
