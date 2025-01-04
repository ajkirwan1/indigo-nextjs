/** @format */

import db from "@/modules/db";

export async function GetNewUsers() {
  try {
    let date = new Date();

    date.setDate(date.getDate() - 7);

    const recentUsers = await db.user.findMany({
      where: {
        accessrequestdate: {
          gte: new Date(date),
        },
      },
    });
    // throw Error
    return recentUsers;
  } catch (error) {
    return { message: "Database Error: Failed to retrieve data" };
  }
}
