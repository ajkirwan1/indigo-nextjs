/** @format */
"use server";

import ValidateNewUserSignup from "@/utils/validation/user-form-validation";
import db from "@/modules/db"; // Prisma client
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function NewUserSignUp(_, formData) {
  const userName = formData.get("userName");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");

  // 1. Validate input
  const validationResult = ValidateNewUserSignup(
    userName,
    email,
    password,
    passwordConfirm
  );

  if (!validationResult.success) {
    console.log(validationResult);
    return {
      errorMessage: "",
      errors: validationResult,
    };
  }

  try {
    // 2. Check if user already exists
    const existingUser = await db.userNew.findFirst({
      where: {
        OR: [{ userName: userName }, { email: email }],
      },
    });

    if (existingUser) {
      const userError =
        existingUser.userName === userName
          ? { errorType: "usernameExists", message: "Username already exists" }
          : { errorType: "emailExists", message: "Email already exists" };

      return {
        errorMessage: "",
        errors: [userError],
        submitted: false,
      };
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    await db.userNew.create({
      data: {
        userName,
        email,
        hashedPassword: hashedPassword,
        registrationId: registrationId,
      },
    });

    // 5. Redirect on success
    redirect("/dashboard");
  } catch (error) {
    console.error("Registration error:", error);

    return {
      errorMessage: "Something went wrong. Please try again.",
      errors: [],
    };
  }
}
