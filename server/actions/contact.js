/** @format */
"use server";

import { sendMail } from "@/lib/send-mail";

export async function ContactUs(_, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const message = formData.get("message");
  const email = formData.get("email");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const contactNumber = formData.get("contactNumber");

  let errors = [];

  if (
    typeof message !== "string" ||
    message.length < 1 ||
    message.length > 255
  ) {
    errors.push({ errorType: "message", message: "Invalid message" });
  }

  if (
    typeof email !== "string" ||
    email.length < 6 ||
    email.length > 25 ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    errors.push({ errorType: "email", message: "Invalid email" });
  }

  if (
    typeof firstName !== "string" ||
    firstName.length < 1 ||
    firstName.length > 30
  ) {
    errors.push({ errorType: "firstName", message: "Invalid first name" });
  }

  if (
    typeof lastName !== "string" ||
    lastName.length < 1 ||
    lastName.length > 30
  ) {
    errors.push({ errorType: "lastName", message: "Invalid last name" });
  }

  if (
    typeof contactNumber !== "string" ||
    contactNumber.length < 2 ||
    contactNumber.length > 30
  ) {
    errors.push({
      errorType: "contactNumber",
      message: "Invalid contact number",
    });
  }

  // if (errors.length > 0) {
  //   return { errors, errorMessage: "", submitted: false };
  // }
  // const submitted = true;
  // return { submitted };

  const response = await sendMail({
    email: "ajkirwan1gmail.com",
    subject: "A test email",
    message: "Hello Jimmy",
    text: message,
  });

  // if (response.accepted?.length == 0) {
  //   return {
  //     errors: [],
  //     errorMessage: "Message was not delivered",
  //     submitted: false,
  //   };
  // }

  if (response.message) {
    return {
      errors: [],
      errorMessage: response.message,
      submitted: false,
    };
  }

  return {
    errors: [],
    errorMessage: "",
    submitted: true,
  }
}
