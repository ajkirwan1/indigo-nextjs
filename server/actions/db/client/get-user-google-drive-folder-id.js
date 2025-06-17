/** @format */
"use server";

import db from "@/modules/db";

export async function GetUserGoogleDriveFolderId(userId) {
//   const userId = state.id;

  try {
    // Step 1: Retrieve googleDriveFolderId from userNew
    const user = await db.userNew.findUnique({
      where: { id: userId },
      select: { googleDriveFolderId: true },
    });

    // Step 2: Handle missing user or folder ID
    if (!user) {
      throw new Error("User not found.");
    }

    if (!user.googleDriveFolderId) {
      throw new Error("Google Drive Folder ID not found for this user.");
    }

    // Success
    return {
      id: userId,
      googleDriveFolderId: user.googleDriveFolderId,
      errorMessage: "",
      success: true,
    };
  } catch (error) {
    console.error("Error retrieving Google Drive folder ID:", error);

    return {
      id: userId,
      googleDriveFolderId: null,
      errorMessage: error.message || "Failed to retrieve folder ID.",
      success: false,
    };
  }
}
