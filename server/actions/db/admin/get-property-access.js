/** @format */

import db from "@/modules/db";

export async function getPropertyAccessByUser(id) {
  try {
    const propertyAccess = await db.user.findFirst({
      where: { id: id },
      select: {
        propertyaccess: true,
      },
    });
    return propertyAccess;
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
