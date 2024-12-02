/** @format */
"use server";
import db from "@/modules/db";

async function validateCredentials(userName, email, password, passwordConfirm) {
  let errors = [];

  const existingUuser = await db.user.findFirst({
    where: { username: userName },
  });

  const existingEmail = await db.user.findFirst({
    where: { email: email },
  });

  if (existingUuser) {
    errors.push("Username already exists");
  }

  if (
    typeof userName !== "string" ||
    userName.length < 3 ||
    userName.length > 31
  ) {
    errors.push("Invalid username");
  }

  if (password != passwordConfirm) {
    errors.push("Passwords do not match");
  }

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    errors.push("Invalid Password");
  }

  if (existingEmail) {
    errors.push("Email already exists");
  }

  if (typeof email !== "string" || email.length < 6 || email.length > 255) {
    errors.push("Invalid email address");
  }

  return { errors };
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
