/** @format */
"use server";

import { sendNewsletterRequest } from "@/lib/send-newsletter-request";

export async function NewsletterFormAction(_, formData) {
  try {

    const email = formData.get("email");

    const response = await sendNewsletterRequest({
      email: email
    })

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
