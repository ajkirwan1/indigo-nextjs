/** @format */

"use server";

import db from "@/modules/db";

export async function FindAllUsers() {
  try {
    const existingUsers = await db.userRegistration.findMany({});
    return existingUsers;
  } catch (error) {
    console.log(error, "existingUsers")
    return { message: "Database Error: Failed to retrieve data" };
  }
}
