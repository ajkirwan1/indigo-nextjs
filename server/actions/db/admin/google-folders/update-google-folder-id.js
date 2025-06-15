/** @format */
"use server";
import db from "@/modules/db";

/**
 * Updates the Google Drive folder ID for a given user.
 *
 * @param id - User's unique identifier.
 * @param folderId - New Google Drive folder ID to be set.
 * @returns The updated user record or an error object.
 */
export async function updateGoogleDriveFolderId(id, folderId) {
  try {
    // const updatedUser = await db.userNew.update({
    //   where: { id },
    //   data: { googleDriveFolderId: folderId },
    //   select: {
    //     id: true,
    //     googleDriveFolderId: true,
    //   },
    // });

    // return updatedUser;
    console.log(id, folderId);
  } catch (error) {
    console.error("Error updating Google Drive Folder ID:", error);
    return { dbUpdateError: "An error occurred while updating the folder ID." };
  }
}
