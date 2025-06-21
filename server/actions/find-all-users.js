/** @format */

"use server";

import db from "@/modules/db";

/**
 * Retrieves all user registrations from the database.
 * @returns {Promise<{ success: boolean, data?: any[], message?: string }>}
 */
export async function FindAllUsers() {
  try {
    const existingUsers = await db.userRegistration.findMany({
      orderBy: {
        createdAt: "desc", // Optional: sorts by newest first
      },
    });

    return {
      success: true,
      data: existingUsers,
    };
  } catch (error) {
    console.error("❌ [FindAllUsers] Database fetch failed:", {
      message: error?.message || "Unknown error",
      stack: error?.stack,
    });

    return {
      success: false,
      message: "Database error: Failed to retrieve user data.",
    };
  }
}
