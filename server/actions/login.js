/** @format */
"use server";
import sql from "better-sqlite3";
import { hash } from "@node-rs/argon2";
import db from "@/modules/db";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { redirect } from "next/navigation";

export async function Login(state, formData) {
  const passwords = await db.password.findMany();
  const users = await db.user.findMany();
  const user = await db.user.findFirst({
    where: { username: "user123" },
  });
  console.log(user);
  console.log(passwords);
  const sessions = await db.session.findMany();
  console.log(sessions);
  const username = formData.get("username");
  const password = formData.get("password");

  let errors = [];

  const existingUser = await db.user.findFirst({
    where: { username: username },
  });

  if (!existingUser) {
    errors.push("Invalid username or password");
    return { errors };
  }

  const userpasswords = await db.password.findFirst({
    where: { userId: existingUser.id },
  });

  const validPassword = await verify(userpasswords.hashedPassword, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  if (!validPassword) {
    errors.push("Invalid username or password");
    return { errors };
  }
  const active_expires = 10000;

  const userId = existingUser.id;
  const session = await lucia.createSession(
     userId 
  );

  const sessionCookie = lucia.createSessionCookie(session.id);
  console.log(sessionCookie.name, "Cookie name");
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  if (state.redirection) {
    redirect(`/${state.redirection}`);
  }
  if (existingUser.admin_access == 2) {
    return redirect("/admin");
  }
  return redirect("/");
}
