'use server';

import { createErrorResponse } from "@/utils/errors/error-response";
import db from "@/modules/db";

/**
 * Updates a user's personal and registration info in the database.
 * @param data - The user input data to update.
 * @param id - The ID of the user in the UserNew table.
 * @returns Updated user or a structured error response.
 */
export async function updateUserPersonalInfo(data, id) {
  try {
    if (!id || !data) {
      return createErrorResponse("MISSING_PARAMETERS", "User ID and data are required.");
    }

    const updatedUser = await db.userNew.update({
      where: { id },
      data: {
        userName: data.userName,
        registration: {
          update: {
            name: data.firstName, // assuming name = first name
            email: data.email,
            phoneNumber: data.phoneNumber,
          },
        },
      },
      include: {
        registration: true,
      },
    });

    return {
      success: true,
      data: {
        userName: updatedUser.userName,
        firstName: updatedUser.registration.name,
        email: updatedUser.registration.email,
        phoneNumber: updatedUser.registration.phoneNumber,
      },
    };
  } catch (error) {
    console.error("Database update failed:", error);
    return createErrorResponse("DB_UPDATE_FAILED", "An error occurred while updating the user.");
  }
}
