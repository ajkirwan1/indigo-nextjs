/** @format */
"use server";
import sql from "better-sqlite3";
import db from "@/modules/db";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
// const db = sql("main.db");

export async function Login(state, formData) {
  const users = await db.user.findMany();
  const user = await db.user.findFirst({
    where: { username: "user123" },
  });
  console.log(user);

  // {users.map((user) => (
  //   console.log(user)
  // ))}

  // await new Promise((resolve) => setTimeout(resolve, 10000));
  // const username = formData.get("username");
  // const password = formData.get("password");

  // let errors = [];

  // const existingUser = db
  //   .prepare("SELECT * FROM user WHERE username = ?")
  //   .get(username);

  // if (!existingUser) {
  //   errors.push("Invalid username or password")
  //   return {errors}
  // }
  //   const validPassword = await verify(existingUser.password_hash, password, {
  //     memoryCost: 19456,
  //     timeCost: 2,
  //     outputLen: 32,
  //     parallelism: 1,
  //   });
  //   if (!validPassword) {
  //     errors.push("Invalid username or password")
  //     return {errors}
  //   }

  //   const session = await lucia.createSession(existingUser.id, {});
  //   const sessionCookie = lucia.createSessionCookie(session.id);
  //   console.log(sessionCookie.name, "Cookie name")
  //   cookies().set(
  //     sessionCookie.name,
  //     sessionCookie.value,
  //     sessionCookie.attributes
  //   );
  //   // console.warn(existingUser.admin_access, "esisting user");

  //   if (state.redirection) {
  //     redirect(`/${state.redirection}`)
  //   }
  //   if (existingUser.admin_access == 2)
  //   {
  //     return redirect("/admin");
  //   }
  //   return redirect("/");
}
