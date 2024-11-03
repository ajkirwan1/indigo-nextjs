/** @format */
import db from "@/modules/db";

export async function getProperties(userId) {

  const properties = await db.property.findMany({
    where: {
      users: {
        some: {
          user: {
            id: userId,
          },
        },
      },
    },
  });

  return properties;
}
