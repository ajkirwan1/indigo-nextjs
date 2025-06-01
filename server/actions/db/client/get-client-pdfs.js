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
    console.log(pdfs, "PDFS");
    return pdfs;
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
