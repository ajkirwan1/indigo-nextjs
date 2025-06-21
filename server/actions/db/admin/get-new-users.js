/** @format */

"use server";

import db from "@/modules/db";

/**
 * Fetches users created within the last 14 days.
 * @returns An object with `success`, `data`, or `message`.
 */
export async function GetNewUsers() {
  try {
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

    const recentUsers = await db.userRegistration.findMany({
      where: {
        createdAt: {
          gte: fourteenDaysAgo,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: recentUsers,
    };
  } catch (error) {
    console.error("❌ GetNewUsers Error:", {
      message: (error)?.message,
      stack: (error)?.stack,
    });

    return {
      success: false,
      message: "Database error: failed to retrieve recent users.",
    };
  }
}
