/** @format */

"use server";

import db from "@/modules/db";
import { revalidateTag } from "next/cache";

export async function CreateClientPdfs(userId, newPdfIds) {
  console.log(userId);
  try {
    const result = await db.$transaction(async (tx) => {
      const newUser = await tx.userNew.create({
        data: {
          registrationId: userId,
        },
        select: {
          id: true,
        },
      });

      const createData = newPdfIds.map((pdfId) => ({
        userId: newUser.id,
        pdfId,
      }));

      await tx.userPdf.createMany({
        data: createData,
        skipDuplicates: true,
      }),
        await tx.userRegistration.update({
          where: { id: userId },
          data: { registration: "accepted" },
        });
      revalidateTag(`user-${userId}`);
    });
  } catch (error) {
    console.log(error, "ERROR");
    return { dbError: "Something went wrong retrieving the data" };
  }
}
