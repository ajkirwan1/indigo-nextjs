/** @format */
"use server";
import sql from "better-sqlite3";

import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";

const db = sql("main.db");


export async function Login(_, formData) {

  const username = formData.get("username");
  const password = formData.get("password");

  let errors = [];

  const existingUser = db
    .prepare("SELECT * FROM user WHERE username = ?")
    .get(username);
 
  if (!existingUser) {
    errors.push("Invalid username or password")
    return {errors}
  } 
    const validPassword = await verify(existingUser.password_hash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    if (!validPassword) {
      errors.push("Invalid username or password")
      return {errors}
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    console.log(sessionCookie.name, "Cookie name")
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    console.warn(existingUser.admin_access, "esisting user");
    if (existingUser.admin_access == 1)
    {
      return redirect("/admin");
    }
    // userSession = {session}
    return redirect("/");
  }
