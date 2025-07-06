"use server";
import db from "@/modules/db";

export async function updateGoogleDriveFolderId(registrationId, googleFieldId) {
  const numericRegistrationId = parseInt(registrationId, 10);

  console.log("🔍 Starting transaction for registrationId:", numericRegistrationId);
  console.log("📁 Folder ID to set:", googleFieldId);

  try {
    const [createdUser, updatedRegistration] = await db.$transaction([
      db.userNew.create({
        data: {
          googleDriveFolderId: googleFieldId,
          registrationId: numericRegistrationId,
        },
        select: {
          id: true,
          googleDriveFolderId: true,
          registrationId: true,
        },
      }),

      db.userRegistration.update({
        where: { id: numericRegistrationId },
        data: { registration: "accepted" },
        select: { id: true, registration: true, email: true },
      }),
    ]);

    console.log("✅ Created UserNew:", createdUser);
    console.log("✅ Updated registration status:", updatedRegistration);

    // You can return the actual created and updated data here if you want
    return {
      message: "✅ Success: UserNew created and registration accepted.",
      createdUser,
      updatedRegistration,
    };
  } catch (error) {
    console.error("❌ Error during transaction:", error);
    return {
      createError: "An error occurred during creation and registration update.",
    };
  }
}
