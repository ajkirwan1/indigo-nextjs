/** @format */

"use server";

import db from "@/modules/db";

/**
 * Fetches users with a "pending" registration status.
 * @returns {Promise<{ success: boolean, data?: any[], message?: string }>}
 */
export async function GetPendingUsers() {
  try {
    const userPendingRegistration = await db.userRegistration.findMany({
      where: {
        registration: {
          equals: "pending", // Assuming 'registration' is a string field
        },
      },
      orderBy: {
        createdAt: "desc", // Optional: sort by most recent
      },
    });

    return {
      success: true,
      data: userPendingRegistration,
    };
  } catch (error) {
    console.error("❌ [GetPendingUsers] Failed to fetch pending users:", {
      error: error?.message || error,
      stack: error?.stack,
    });

    return {
      success: false,
      message: "Database error: Failed to retrieve pending users.",
    };
  }
}
