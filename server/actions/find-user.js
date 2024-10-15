/** @format */

"use server";

import { db } from "@/lib/db";

export async function FindUser(_, formData) {
  const username = formData.get("username");
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: "Invalid username",
    };
  }

  const existingUser = db
    .prepare("SELECT * FROM user WHERE username = ?")
    .get(username);
  if (!existingUser) {
    return {
      error: "Incorrect username or password",
    };
  } else {
    return {
      username,
    };
  }
}
