/** @format */

import db from "@/modules/db";

export async function GetPendingUsers() {
  const pendingPropertyUsers = await db.user.findMany({
    where: {
      propertyaccess: {
        equals: 0,
      },
    },
  });

  return pendingPropertyUsers;
}
