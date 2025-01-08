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

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const username = formData.get("username");
  const password = formData.get("password");
  let errors = [];
  let userType;

  // try {
  //   const existingUser = await db.user.findFirst({
  //     where: { username: username },
  //   });

  //   console.log(existingUser);

  //   if (!existingUser) {
  //     errors.push({ errorType: "username", message: "Invalid username" });
  //     return { errors, errorMessage: "", submitted: false };
  //   }
  //   const userpasswords = await db.password.findFirst({
  //     where: { userId: existingUser.id },
  //   });
  // let userType;

  try {
    const existingUser = await db.user.findFirst({
      where: { username: username },
    });

    console.log(existingUser);

    if (!existingUser) {
      errors.push({ errorType: "username", message: "Invalid username" });
      return { errors, errorMessage: "", submitted: false };
    }
    const userpasswords = await db.password.findFirst({
      where: { userId: existingUser.id },
    });

    const validPassword = await new LegacyScrypt().verify(
      userpasswords.hashedPassword,
      password
    );

    if (!validPassword) {
      errors.push({ errorType: "password", message: "Invalid password" });
      return { errors, errorMessage: "", submitted: false };
    }
    const userId = existingUser.id;
    const session = await lucia.createSession(userId);
    const sessions = await db.session.findMany();

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
      userType = "admin"
      // return redirect("/admin");
    }
  } catch (error) {
    return {
      errors: [],
      errorMessage: " An error occured fetching your information",
      submitted: false,
    };
  }

  if (userType == "admin") {
    return redirect("/admin");
  }
  return redirect("/account");
}

