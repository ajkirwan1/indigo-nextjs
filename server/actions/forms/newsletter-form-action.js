/** @format */
"use server";

import { sendMail } from "@/lib/send-mail";

export async function NewsletterFormAction(_, formData) {
  const email = formData.get("email");

  const response = await sendMail({
    email: "ajkirwan1gmail.com",
    subject: email,
    message: "Hello Jimmy",
    text: email
  })

  // let errors = [];


  // if (!email || email.trim().length === 0) {
  //   errors.push("Password required");
  // }

  // if (errors.length > 0) {
  //   return { errors };
  // }
}