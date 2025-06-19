/** @format */
"use server";

import ValidateNewUserSignup from "@/utils/validation/user-form-validation";
import db from "@/modules/db"; // Prisma client
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function NewUserSignUp(prevState, formData) {
  const userName = formData.get("userName");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");

  const magicLinkRecord = prevState.magicLinkRecord;

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
      ...prevState,
      errorMessage: "",
      errors: validationResult,
      magicLinkRecord,
    };
  }

  try {
    // 2. Check if user already exists
    const existingUser = await db.userNew.findFirst({
      where: { userName: userName },
    });

    if (existingUser) {
      const userError =
        existingUser.userName === userName
          ? { errorType: "usernameExists", message: "Username already exists" }
          : { errorType: "emailExists", message: "Email already exists" };

      return {
        ...prevState,
        errorMessage: "",
        errors: [userError],
        submitted: false,
        magicLinkRecord,
      };
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.$transaction([
      db.userNew.update({
        where: {
          id: magicLinkRecord.userId,
        },
        data: {
          userName,
          userType: "client",
          hashedPassword,
        },
      }),
      db.magicLinkToken.update({
        where: {
          id: magicLinkRecord.id,
        },
        data: {
          used: true,
        },
      }),
    ]);

    // 5. Redirect on success
    redirect("/login");
  } catch (error) {
    console.log(error.digest, "DIGEST")
    if (error instanceof Error && error.digest?.startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    console.error("Registration error:", error);

    return {
      ...prevState,
      errorMessage: "Something went wrong. Please try again.",
      errors: [],
      magicLinkRecord,
    };
  }
}
