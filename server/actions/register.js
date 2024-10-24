/** @format */
"use server";
import { LegacyScrypt } from "lucia";

import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { generateIdFromEntropySize } from "lucia";
import { redirect } from "next/navigation";

import db from "@/modules/db";
import { Cone } from "lucide-react";

async function processCredentials(userName, email, password, passwordConfirm) {
  let errors = [];

  const existingUuser = await db.user.findFirst({
    where: { username: userName },
  });

  if (existingUuser) {
    errors.push("Username already exists");
    return { errors };
  }

  if (
    typeof userName !== "string" ||
    userName.length < 3 ||
    userName.length > 31
  ) {
    errors.push("Invalid username");
    return { errors };
  }

  if (password != passwordConfirm) {
    errors.push("Passwords do not match");
    return { errors };
  }

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    errors.push("Invalid Password - password must be longer than 6 characters");
    return { errors };
  }

  if (typeof email !== "string" || email.length < 6 || email.length > 255) {
    errors.push("Invalid email address");
    return { errors };
  }
  return false;
}

export async function RegisterAction(_, formData) {
  const users = await db.user.findMany();
  console.log(users);

  const details = await db.investmentinterest.findMany();
  console.log(details);

  const userName = formData.get("userName");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const companyName = formData.get("companyName");
  const phoneNumber = formData.get("phoneNumber");
  const privateBuyer = formData.get("privateBuyer");
  const realEstateBuyer = formData.get("realEstateBuyer");
  const locationGreece = formData.get("locationGreece");
  const locationOther = formData.get("locationOther");
  const sixMonths = formData.get("sixMonths");
  const sixToTwelveMonths = formData.get("sixToTwelveMonths");
  const twelveMonths = formData.get("twelveMonths");
  const residential = formData.get("residential");
  const commercial = formData.get("commercial");
  const land = formData.get("land");
  const small = formData.get("50");
  const medium = formData.get("50-100");
  const large = formData.get("100-150");
  const xlarge = formData.get("150+");
  const yes = formData.get("yes");
  const no = formData.get("no");

  let errors = [];

  const result = await processCredentials(userName, email, password, passwordConfirm);

  // console.log(result);
  if (result != false) {
    console.log(result);
    return result;
  }
  if (result == false)
  {
    console.log("fsdfdsfdsf")
  }

    // console.log(firstName);


  // if (
  //   typeof firstName !== "string" ||
  //   firstName.length < 3 ||
  //   firstName.length > 31) {
  //   errors.push("Invalid first name");
  //   return {errors}
  // }

  // if (
  //   typeof lastName !== "string" ||
  //   lastName.length < 3 ||
  //   lastName.length > 31) {
  //   errors.push("Invalid last name");
  //   return {errors}
  // }

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
  // return redirect("/register/pending-auth");
}
