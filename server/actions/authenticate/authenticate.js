/** @format */

"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// ...

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData, {redirectTo: "/news"});
  } catch (error) {
    console.log(error)
    throw error;
  }
}
