/** @format */
"use server";

import { sendMail } from "@/lib/send-mail";

export async function NewsletterFormAction(_, formData) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const email = formData.get("email");

    throw Error;
    // const response = await sendMail({
    //   email: "ajkirwan1gmail.com",
    //   subject: email,
    //   message: "Hello Jimmy",
    //   text: email
    // })

    // let submitted = true;
    return {
      errorMessage: "",
      submitted: true,
    };
  } catch (error) {
    return {
      errorMessage: "Subscription was not delivered",
      submitted: false,
    };
  }
}
