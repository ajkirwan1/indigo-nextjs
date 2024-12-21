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
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const contactNumber = formData.get("contactNumber");

  let errors = [];

  if (
    typeof message !== "string" ||
    message.length < 6 ||
    message.length > 255
  ) {
    // errors.push("Invalid message");
    errors.push({ errorType: "message", message: "Invalid message" });
  }

  if (
    typeof email !== "email" ||
    email.length < 6 ||
    email.length > 25 
  ) {
    errors.push({ errorType: "email", message: "Invalid email" });
  }

  if (
    typeof firstName !== "string" ||
    firstName.length < 6 ||
    firstName.length > 30
  ) {
    errors.push({ errorType: "firstName", message: "Invalid first name" });
  }

  if (
    typeof lastName !== "string" ||
    lastName.length < 6 ||
    lastName.length > 30
  ) {
    errors.push({ errorType: "lastName", message: "Invalid last name" });
  }

  if (
    typeof contactNumber !== "string" ||
    contactNumber.length < 6 ||
    contactNumber.length > 30
  ) {
    errors.push({ errorType: "contactNumber", message: "Invalid contact number" });
  }

  console.log(errors);
  console.log(errors.find((item) => item.errorType == "email"));

  if (errors.length > 0) {
    return { errors };
  }

  // const response = await sendMail({
  //   email: "ajkirwan1gmail.com",
  //   subject: "A test email",
  //   message: "Hello Jimmy",
  //   text: message
  // })

  // const sessions = await db.session.findMany();

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
