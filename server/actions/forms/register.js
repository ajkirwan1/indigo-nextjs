/** @format */

"use server";

export async function RegisterAction(prevState, formData) {
  const userName = formData.get("userName");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");
  const email = formData.get("email");

  let errors = [];

  if (!userName || userName.trim().length === 0) {
    errors.push("Username required");
  }

  if (!password || password.trim().length === 0) {
    errors.push("Password required");
  }

  if (!passwordConfirm || passwordConfirm.trim().length === 0) {
    errors.push("passwordConfirm required");
  }

  if (!email || email.trim().length === 0) {
    errors.push("email required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  console.log("register")
}