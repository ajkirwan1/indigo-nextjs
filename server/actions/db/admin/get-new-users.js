/** @format */

import db from "@/modules/db";

export async function GetNewUsers() {
  try {
    let date = new Date();

    date.setDate(date.getDate() - 14);

    const recentUsers = await db.userRegistration.findMany({
      where: {
        createdAt: {
          gte: new Date(date),
        },
      },
    });
    return recentUsers;
  } catch (error) {
    return { message: "Database Error: Failed to retrieve data" };
  }
}
