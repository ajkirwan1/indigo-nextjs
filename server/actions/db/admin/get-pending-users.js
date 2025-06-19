/** @format */

import db from "@/modules/db";

export async function GetPendingUsers() {
  try {
    const userPendingRegistration = await db.userRegistration.findMany({
      where: {
        registration: {
          equals: "pending",
        },
      },
    }); 

    return userPendingRegistration;
  } catch (error) {
    return { message: "Database Error: Failed to retrieve data" };
  }
}
