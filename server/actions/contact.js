/** @format */
"use server";

import { validateRequest } from "@/auth/lucia";
import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { redirect } from "next/navigation";
import db from "@/modules/db";



export async function ContactUs() {
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
  return redirect("/");
}
