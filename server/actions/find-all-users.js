/** @format */

"use server";

import db from "@/modules/db";

export async function FindAllUsers() {
  try {
    const existingUsers = await db.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        propertyaccess: true,
        consultingaccess: true,
        accessrequestdate: true,
      },
    });
    // throw Error;
    return existingUsers;
  } catch (error) {
    return { message: "Database Error: Failed to retrieve data" };
  }
}
