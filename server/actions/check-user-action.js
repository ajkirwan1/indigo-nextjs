/** @format */
"use server";
import db from "@/modules/db";
import { user } from "@nextui-org/theme";

async function validateCredentials(userName, email, password, passwordConfirm) {
  // console.log(userName);
  let errors = [];

  if (
    typeof userName !== "string" ||
    userName.length < 6 ||
    userName.length > 31
  ) {
    errors.push({ errorType: "username", message: "Invalid username" });
  }

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 31
  ) {
    errors.push({ errorType: "password", message: "Invalid password" });
  }

  if (password != passwordConfirm) {
    errors.push({
      errorType: "passwordConfirm",
      message: "Passwords do not match",
    });
  }

  if (
    typeof email !== "string" ||
    email.length < 6 ||
    email.length > 25 ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    errors.push({ errorType: "email", message: "Invalid email" });
  }

  if (errors.length > 0) {
    return { errors };
  }

  try {
    // const existingUuser = await db.user.findFirst({
    //   where: { username: userName },
    // });

    const existingUuser = ""

    if (existingUuser) {
      errors.push({
        errorType: "usernameExists",
        message: "Username already exists",
      });
      return { errors };
    }

    // const existingEmail = await db.user.findFirst({
    //   where: { email: email },
    // });


    const existingEmail = ""

    if (existingEmail) {
      errors.push({
        errorType: "emailExists",
        message: "Email already exists",
      });
      return { errors };
    }

  } catch (error) {
    return {
      dbErrorMessage: " An error occured accessing the database",
    };
  }
}

export async function CheckUserAction(
  userName,
  email,
  password,
  passwordConfirm
) {
  const validatedCredentials = await validateCredentials(
    userName,
    email,
    password,
    passwordConfirm
  );

  return validatedCredentials;
}
