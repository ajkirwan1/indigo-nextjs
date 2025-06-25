import db from "@/modules/db";
import { createErrorResponse } from "@/utils/errors/error-response";

export async function DeleteUserById(userId) {
  console.log(userId, "USER ID passed in");

  try {
    // First, find the user's registrationId (if needed)
    const user = await db.userNew.findUnique({
      where: { id: userId },
      select: { id: true, registrationId: true },
    });

    if (!user) {
      return createErrorResponse("USER_NOT_FOUND", "User not found.");
    }

    const registrationId = user.registrationId;

    await db.$transaction([
      db.magicLinkToken.deleteMany({ where: { userId } }),
      db.userPdf.deleteMany({ where: { userId } }),
      db.userNew.delete({ where: { id: userId } }),
      db.userRegistration.delete({ where: { id: registrationId } }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("DeleteUserById error", {
      error: error?.message,
      stack: error?.stack,
      userId,
    });

    return createErrorResponse("DELETE_FAILED", "Failed to delete user.");
  }
}
