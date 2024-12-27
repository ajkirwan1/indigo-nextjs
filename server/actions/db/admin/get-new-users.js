/** @format */

import db from "@/modules/db";

export async function GetNewUsers() {
  let date = new Date();

  date.setDate(date.getDate() - 7);

  const recentUsers = await db.user.findMany(
    {
      where: {
        accessrequestdate: {
          gte: new Date(date),
        },
      },
    }
  );

  return recentUsers;
}
