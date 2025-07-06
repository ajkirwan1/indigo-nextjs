// SubmitNewPassword.ts
'use server'
import bcrypt from "bcryptjs";
import db from "@/modules/db";

export const SubmitNewPassword = async (token, newPassword) => {
  try {
    // Step 1: Look up the token
    const resetToken = await db.magicLinkToken.findUnique({
      where: { token },
    });

    if (!resetToken) {
      return { success: false, errorMessage: "Invalid or unknown token." };
    }

    // Step 2: Check if token has expired
    if (resetToken.expiresAt < new Date()) {
      return { success: false, errorMessage: "Token has expired." };
    }

    // Step 3: Check if token is already used
    if (resetToken.used) {
      return { success: false, errorMessage: "Token has already been used." };
    }

    // Step 4: Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Step 5: Update the user's password and mark token as used in a transaction
    await db.$transaction([
      db.userNew.update({
        where: { id: resetToken.userId },
        data: { hashedPassword: hashedPassword },
      }),
      db.magicLinkToken.update({
        where: { token },
        data: { used: true },
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("Password reset error:", error);
    return { success: false, errorMessage: "Something went wrong." };
  }
};
