/** @format */

import db from "@/modules/db";

export async function getClientDetails(userId) {
  try {
    const clientDetails = await db.pdf.findMany({
      where: {
        userLinks: {
          some: {
            userId: userId,
          },
        },
      },
    });
    return pdfs
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
