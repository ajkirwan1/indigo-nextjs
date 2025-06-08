/** @format */

import db from "@/modules/db";

export async function getClientPdfs(userId) {
  console.log(userId, "USER ID");

  // try {
  //   const allUserPdfs = await db.userPdf.findMany();
  //   console.log(allUserPdfs, "ALL PDFS");
  // } catch {
  //   return { dbFetchError: "An error occured fetching the user information." };
  // }

  const user = await db.userNew.findMany({});

  console.log(user, "USER SE");

  try {
    const pdfs = await db.pdf.findMany({
      where: {
        userLinks: {
          some: {
            userId: userId,
          },
        },
      },
    });
    return pdfs;
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
