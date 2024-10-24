/** @format */
"use server";
import { LegacyScrypt } from "lucia";

import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { generateIdFromEntropySize } from "lucia";
import { redirect } from "next/navigation";

import db from "@/modules/db";

export async function RegisterAction(_, formData) {
  // const username = formData.get("userName");
  // const password = formData.get("password");
  // const passwordConfirm = formData.get("passwordConfirm");
  // const email = formData.get("email");

  // let errors = [];

  // if (password != passwordConfirm) {
  //   errors.push("Passwords do not match");
  // }

  // if (
  //   typeof username !== "string" ||
  //   username.length < 3 ||
  //   username.length > 31 ||

  // ) {
  //   errors.push("Invalid username");
  // }

  // if (
  //   typeof password !== "string" ||
  //   password.length < 6 ||
  //   password.length > 255
  // ) {
  //   errors.push("Invalid Password");
  // }

  // if (typeof email !== "string" || email.length < 6 || email.length > 255) {
  //   errors.push("Invalid email address");
  // }

  //   const existingUser = db
  //     .prepare("SELECT * FROM user WHERE username = ?")
  //     .get(username);
  //   if (existingUser) {
  //     errors.push("Username already exists");
  //   }

  //   const existingEmail = db
  //     .prepare("SELECT * FROM user WHERE email = ?")
  //     .get(email);

  //   if (existingEmail) {
  //     errors.push("Email already exists");
  //   }

  // if (errors.length > 0) {
  //   return { errors };
  // } else {
  //   const passwordHash = await new LegacyScrypt().hash(password)(password, {
  //     memoryCost: 19456,
  //     timeCost: 2,
  //     outputLen: 32,
  //     parallelism: 1,
  //   });
  //   const userId = generateIdFromEntropySize(10);

  // const stmt = db.prepare(
  //   "INSERT INTO user VALUES (@id, @username, @first_name, @last_name, @email, @admin_access, @property_access, @consulting_access, @access_request_date, @password_hash)"
  // );

  // stmt.run({
  //   id: userId,
  //   username: username,
  //   first_name: "",
  //   last_name: "",
  //   email: email,
  //   admin_access: 0,
  //   property_access: 0,
  //   consulting_access: 0,
  //   admin_access: 0,
  //   access_request_date: new Date().toJSON().slice(0, 10),
  //   password_hash: passwordHash,
  // });

  // const session = await lucia.createSession(userId, {});
  // const sessionCookie = lucia.createSessionCookie(session.id);
  // cookies().set(
  //   sessionCookie.name,
  //   sessionCookie.value,
  //   sessionCookie.attributes
  // );
  // return { success: true };
  return redirect("/register/pending-auth");
}
