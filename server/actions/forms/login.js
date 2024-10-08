/** @format */

"use server";

export async function LoginAction(prevState, formData) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")
  const userName = formData.get("userName");
  const password = formData.get("password");

  let errors = [];

  if (!userName || userName.trim().length === 0) {
    errors.push("Username required");
  }

  if (!password || password.trim().length === 0) {
    errors.push("Password required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  console.log("login")
}