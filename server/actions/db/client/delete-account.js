import db from "@/modules/db";
import { createErrorResponse } from "@/utils/errors/error-response";

export async function DeleteUserByRegistrationId(registrationId) {
  try {
    const user = await db.userNew.findUnique({
      where: { registrationId },
      select: { id: true },
    });

    const userId = user.id;

    await db.$transaction([
      db.magicLinkToken.deleteMany({ where: { userId } }),
      db.userPdf.deleteMany({ where: { userId } }),
      db.userNew.delete({ where: { id: userId } }),
      db.userRegistration.delete({ where: { id: registrationId } }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("DeleteUserByRegistrationId error", {
      error: error?.message,
      stack: error?.stack,
      registrationId,
    });

    return createErrorResponse("DELETE_FAILED", "Failed to delete user.");
  }
}
