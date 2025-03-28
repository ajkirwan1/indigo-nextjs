/** @format */

"use server";

import { LegacyScrypt } from "lucia";

import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { generateIdFromEntropySize } from "lucia";
import { redirect } from "next/navigation";

import db from "@/modules/db";

export async function RegisterMultiPage(data) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const userid = generateIdFromEntropySize(10);
  const passwordHash = await new LegacyScrypt().hash(data.password);
  let investmentInterestArray = [];

  for (const [key, value] of Object.entries(data.investmentInterest)) {
    if (value == true) {
      investmentInterestArray.push(key);
    }
  }

  try {
    const user = await db.user.create({
      data: {
        id: userid,
        username: data.userName,
        firstname: data.firstName,
        lastname: data.lastName,
        email: data.email,
        companyname: data.companyName,
        phonenumber: data.phoneNumber,
        buyertype: data.buyerType,
        location: data.location,
        purchasetimeline: data.timeFrame,
        estinvestmentinterest: data.investmentValue,
        previousinvestment: data.investmentHistory,
        adminaccess: 0,
        consultingaccess: 0,
        propertyaccess: 0,
        accessrequestdate: new Date(),
        passwords: {
          create: {
            hashedPassword: passwordHash,
          },
        },
        investmentinterests: {
          createMany: {
            data: investmentInterestArray.map((el) => ({
              interesttype: el,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  const session = await lucia.createSession(userid, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/register/pending-auth");
}
