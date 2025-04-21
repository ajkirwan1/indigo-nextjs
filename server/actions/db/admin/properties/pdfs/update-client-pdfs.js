/** @format */

"use server";

import db from "@/modules/db";
import { revalidateTag } from "next/cache";

export async function UpdateClientPdfs(userId, newPdfIds) {
  try {
    const newUserId = await db.userNew.findFirst({
      where: { registrationId: userId },
      select: { id: true },
    });

    const createData = newPdfIds.map((pdfId) => ({
      userId : newUserId.id,
      pdfId,
    }));

    console.log(createData, "CREATED DATA")

    await db.$transaction([
      // Delete all existing UserPdf links for the user
      db.userPdf.deleteMany({
        where: { userId: newUserId.id },
      }),

      // Insert new links
      db.userPdf.createMany({
        data: createData,
        skipDuplicates: true,
      }),
    ]);

    const userWithPdfs = await db.userNew.findUnique({
      where: { id: newUserId.id },
      select: {
        pdfLinks: {
          include: {
            pdf: true, // gets all fields from the Pdf table
          },
        },
      },
    });
    const currentPdfs = userWithPdfs?.pdfLinks.map((link) => link.pdf) ?? [];

    console.log(currentPdfs);

    revalidateTag(`user-${userId}`);
    return currentPdfs;
  } catch (error) {
    console.log(error, "ERROR");
    return { dbError: "Something went wrong retrieving the data" };
  }
}
