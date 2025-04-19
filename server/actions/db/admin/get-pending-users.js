/** @format */

import db from "@/modules/db";

export async function GetPendingUsers() {
  try {
    // const pendingPropertyUsers = await db.user.findMany({
    //   where: {
    //     propertyaccess: {
    //       equals: 0,
    //     },
    //   },
    // });

    const userPendingRegistration = await db.userRegistration.findMany({
      where: {
        registration: {
          equals: "pending",
        },
      },
    }); 

    console.log(userPendingRegistration)

    return userPendingRegistration;
  } catch (error) {
    return { message: "Database Error: Failed to retrieve data" };
  }
}
