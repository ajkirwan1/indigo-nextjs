/** @format */

"use server";

import { redirect } from "next/navigation";

export async function requestConsultingAccess(_, formData) {
  const user = await validateRequest();
  console.log("request consulting", user);
  const email = formData.get("email");
  const firstname = formData.get("first-name");
  const lastName = formData.get("last-name");
  const country = formData.get("country");
  const username = formData.get("username");
  console.log(firstname);
  return redirect("/");
}
