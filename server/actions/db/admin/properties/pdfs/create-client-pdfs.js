/** @format */

"use server";

import db from "@/modules/db";
import { revalidateTag } from "next/cache";
import { sendMagicLink } from "../../send-magic-link";
import { sendMagicLinkEmail } from "@/lib/mail/send-magic-link-email";
import crypto from "crypto";

export async function CreateClientPdfs(userId, newPdfIds) {
  // console.log(userId);

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24 hour expiry

  try {
    const result = await db.$transaction(async (tx) => {
      const userEmail = await tx.userRegistration.findFirst({
        where: { id: userId },
        select: {
          email: true,
        },
      });

      console.log("USER EMAIL", userEmail);

      const newUser = await tx.userNew.create({
        data: {
          registrationId: userId,
        },
        select: {
          id: true,
        },
      });
      // await sendMagicLink("ajkirwan1@gmail.com", newUser.id);

      await tx.magicLinkToken.create({
        data: {
          email: userEmail.email,
          token,
          expiresAt,
          userId: newUser.id,
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

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        ? process.env.NEXT_PUBLIC_BASE_URL
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";
      
      console.log("Base URL:", baseUrl); // 👈 Add this for debugging
      
        

      const magicLink = `${baseUrl}/new-user?token=${token}`;

      const email = "ajkirwan1@gmail.com";

      await sendMagicLinkEmail(email, magicLink);

      revalidateTag(`user-${userId}`);
    });
  } catch (error) {
    console.log(error, "ERROR");
    return { dbError: "Something went wrong submitting the data" };
  }
}
