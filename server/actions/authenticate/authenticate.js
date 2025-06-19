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


    console.log(username)
    console.log(password)

    const existingUser = await db.userNew.findFirst({
      where: { userName: username },
    });

    if (!existingUser) {
      return {validationErrors: {noUser: "Invalid credentials"}}
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.hashedPassword)

    if (!passwordMatch) {
      return {validationErrors: {noUser: "Invalid credentials"}}
    }
    await signIn("credentials", existingUser);
    
  } catch (error) {
    throw error;
  }
}
