"use server";
import db from "@/modules/db";

export async function updateGoogleDriveFolderIdByUserNewId(userRegistrationId, googleFolderId) {
  const numericRegistrationId = parseInt(userRegistrationId, 10);

  console.log("🔍 Looking for UserNew with registrationId:", numericRegistrationId);
  console.log("📁 Folder ID to set:", googleFolderId);

  try {
    const updatedUserNew = await db.userNew.update({
      where: {
        registrationId: numericRegistrationId, // Find UserNew by its registrationId
      },
      data: {
        googleDriveFolderId: googleFolderId,
      },
      select: {
        id: true,
        registrationId: true,
        googleDriveFolderId: true,
      },
    });

    console.log("✅ Updated UserNew:", updatedUserNew);

    return {
      message: "✅ Success: GoogleDriveFolderId updated.",
      updatedUserNew,
    };
  } catch (error) {
    console.error("❌ Error during update:", error);
    return {
      updateError: "An error occurred while updating UserNew.",
    };
  }
}
