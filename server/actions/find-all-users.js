/** @format */

"use server";

import db from "@/modules/db";

export async function FindAllUsers() {
  try {
    const existingUsers = await db.userRegistration.findMany({});
    // throw Error;
    return existingUsers;
  } catch (error) {
    return { message: "Database Error: Failed to retrieve data" };
  }
}
