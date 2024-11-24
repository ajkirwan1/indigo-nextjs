/** @format */

import db from "@/modules/db";

export async function getUser(id) {
  const existingUser = await db.user.findFirst({
    where: { id: id },
  });
  return existingUser;
}
