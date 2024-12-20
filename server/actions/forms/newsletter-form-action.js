/** @format */

"use server";

export async function NewsletterFormAction(_, formData) {
  console.log("LKDALKDAMLKD")
  const email = formData.get("email");
  console.log(email)

  let errors = [];


  if (!email || email.trim().length === 0) {
    errors.push("Password required");
  }

  if (errors.length > 0) {
    return { errors };
  }
}