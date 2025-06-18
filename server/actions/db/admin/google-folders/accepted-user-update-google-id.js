"use server";
import db from "@/modules/db";

export async function updateGoogleDriveFolderIdByUserNewId(userNewId, googleFolderId) {
  const numericUserNewId = parseInt(userNewId, 10);

  console.log("🔍 Starting transaction for userNewId:", numericUserNewId);
  console.log("📁 Folder ID to set:", googleFolderId);

  try {
    // Update the googleDriveFolderId for the specific userNew
    const updatedUserNew = await db.userNew.update({
      where: { id: numericUserNewId }, // Find the userNew by its id
      data: {
        googleDriveFolderId: googleFolderId // Update the googleDriveFolderId field
      },
      select: {
        id: true,
        googleDriveFolderId: true,
      },
    });

    console.log("✅ Updated UserNew:", updatedUserNew);

    // You can return the actual updated data here if you want
    return {
      message: "✅ Success: GoogleDriveFolderId updated.",
      updatedUserNew,
    };
  } catch (error) {
    console.error("❌ Error during transaction:", error);
    return {
      updateError: "An error occurred during the update.",
    };
  }
}
