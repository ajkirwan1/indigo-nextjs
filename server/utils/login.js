/** @format */

import { db } from "@/lib/db";

export function CheckUser(previousState, formData) {
  if (!previousState.username) {
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
    } else {
      const existingUser = db
        .prepare("SELECT * FROM user WHERE username = ?")
        .get(username);
      if (!existingUser) {
        return {
          error: "Incorrect username",
        };
      } else {
        return {
          existingUser,
        };
      }
    }
  }
}

export async function ValidatePassword(previousState) {
  const passwordHash = previousState.existingUser.password_hash;
  const validPassword = await verify(passwordHash, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  if (!validPassword) {
    // NOTE:
    // Returning immediately allows malicious actors to figure out valid usernames from response times,
    // allowing them to only focus on guessing passwords in brute-force attacks.
    // As a preventive measure, you may want to hash passwords even for invalid usernames.
    // However, valid usernames can be already be revealed with the signup page among other methods.
    // It will also be much more resource intensive.
    // Since protecting against this is non-trivial,
    // it is crucial your implementation is protected against brute-force attacks with login throttling, 2FA, etc.
    // If usernames are public, you can outright tell the user that the username is invalid.
    return {
      error: "Incorrect username or password",
    };
  }
}
