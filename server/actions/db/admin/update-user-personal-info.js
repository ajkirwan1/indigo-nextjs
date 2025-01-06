/** @format */

import db from "@/modules/db";

export async function UpdateUserPersonalInfo(data, id) {
  try {
    const pendingPropertyUsers = await db.user.update({
      where: {
        id: id,
      },
      data: {
        username: data.username,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
      },
    });
  } catch (error) {
    return { dbError: "An error occured writing to the database" };
  }
}
