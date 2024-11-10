/** @format */
"use server";
import { LegacyScrypt } from "lucia";
import db from "@/modules/db";
import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { redirect } from "next/navigation";

export async function Login(state, formData) {
  // const passwords = await db.password.findMany();
  // const users = await db.user.findMany();
  // const user = await db.user.findFirst({
  //   where: { username: "user123" },
  // });
  // console.log(user);
  // console.log(passwords);
  // const sessions = await db.session.findMany();
  // console.log(sessions);
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
  // console.log(existingUser);
  const userpasswords = await db.password.findFirst({
    where: { userId: existingUser.id },
  });
  // console.log(userpasswords);
  const validPassword = await new LegacyScrypt().verify(userpasswords.hashedPassword, password);
  // console.log(validPassword)
  if (!validPassword) {
    errors.push("Invalid username or password");
    return { errors };
  }
  const userId = existingUser.id;
  const session = await lucia.createSession(
     userId
  );
  const sessions = await db.session.findMany();
  console.log(sessions)
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
  if (existingUser.adminaccess == 2) {
    return redirect("/admin");
  }
  return redirect("/");

}
