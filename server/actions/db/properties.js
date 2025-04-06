/** @format */
import db from "@/modules/db";

export async function getProperties(userId) {
  try {
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
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
