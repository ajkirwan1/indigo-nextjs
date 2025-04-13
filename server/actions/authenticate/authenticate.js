/** @format */

"use server";

import { signIn } from "@/auth";
import ValidateLogin from "@/utils/validation/login-form-validation";
import db from "@/modules/db";
import bcrypt from "bcryptjs";

export async function authenticate(prevState, formData) {
  try {
    const validationResult = ValidateLogin(formData);
    if (!validationResult.success) {
      return validationResult;
    }

    const username = formData.get("username");
    const password = formData.get("password");

    const existingUser = await db.user.findFirst({
      where: { username: username },
    });

    if (!existingUser) {
      return {validationErrors: {noUser: "Invalid credentials"}}
    }

    const userpassword = await db.password.findFirst({
      where: { userId: existingUser.id },
    });

    const passwordMatch = await bcrypt.compare(password, userpassword.hashedPassword)

    if (!passwordMatch) {
      return {validationErrors: {noUser: "Invalid credentials"}}
    }
    console.log(existingUser)

    await signIn("credentials", existingUser);
    
  } catch (error) {
    throw error;
  }
}
