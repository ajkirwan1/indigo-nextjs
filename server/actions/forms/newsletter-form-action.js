/** @format */

"use server";

export async function NewsletterFormAction(_, formData) {
  const email = formData.get("email");

  let errors = [];


  if (!email || email.trim().length === 0) {
    errors.push("Password required");
  }

  if (errors.length > 0) {
    return { errors };
  }
}