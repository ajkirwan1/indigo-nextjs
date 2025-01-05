/** @format */

import db from "@/modules/db";

export async function getUser(id) {
  try {
    const existingUser = await db.user.findFirst({
      where: { id: id },
    });
    return existingUser;
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
