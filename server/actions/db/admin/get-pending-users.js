/** @format */

import db from "@/modules/db";

export async function GetPendingUsers() {
  try {
    const pendingPropertyUsers = await db.user.findMany({
      where: {
        propertyaccess: {
          equals: 0,
        },
      },
    });

    // throw Error;
    return pendingPropertyUsers;
  } catch (error) {
    return { message: "Database Error: Failed to retrieve data" };
  }
}
