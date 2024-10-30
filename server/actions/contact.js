/** @format */
"use server";

import { validateRequest } from "@/auth/lucia";
import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { redirect } from "next/navigation";
import db from "@/modules/db";
import { sendMail } from "@/lib/send-mail";



export async function ContactUs(_, formData) {
  const message = formData.get("message");
  const email = formData.get("password");
  const fullName = formData.get("fullName");
  const contactNumber = formData.get("contactNumber");

  const response = await sendMail({
    email: "ajkirwan1gmail.com",
    subject: "A test email",
    message: "Hello Jimmy",
    text: message
  })

  const sessions = await db.session.findMany();

//   const sessions = await db.session.findMany();
//   console.log(sessions);
//   const { session } = await validateRequest();
//   if (!session) {
//     return {
//       error: "Unauthorized",
//     };
//   }

//   await lucia.invalidateSession(session.id);

//   const sessionCookie = lucia.createBlankSessionCookie();
//   cookies().set(
//     sessionCookie.name,
//     sessionCookie.value,
//     sessionCookie.attributes
//   );
  // return redirect("/");
}
