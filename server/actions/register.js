/** @format */
"use server";
import { LegacyScrypt } from "lucia";

import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { generateIdFromEntropySize } from "lucia";
import { redirect } from "next/navigation";

import db from "@/modules/db";

async function validateCredentials(userName, email, password, passwordConfirm) {
  let errors = [];

  const existingUuser = await db.user.findFirst({
    where: { username: userName },
  });

  const existingEmail = await db.user.findFirst({
    where: { email: email },
  });

  if (existingUuser) {
    errors.push("Username already exists");
  }

  if (
    typeof userName !== "string" ||
    userName.length < 3 ||
    userName.length > 31
  ) {
    errors.push("Invalid username");
  }

  if (password != passwordConfirm) {
    errors.push("Passwords do not match");
  }

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    errors.push("Invalid Password");
  }

  if (existingEmail) {
    errors.push("Email already exists");
  }

  if (typeof email !== "string" || email.length < 6 || email.length > 255) {
    errors.push("Invalid email address");
  }

  return { errors };
}

function validateRegistration(firstName, lastName, companyName, phoneNumber) {
  let errors = [];
  if (
    typeof firstName !== "string" ||
    firstName.length < 3 ||
    firstName.length > 31
  ) {
    errors.push("Invalid first name");
  }
  if (
    typeof lastName !== "string" ||
    lastName.length < 3 ||
    lastName.length > 31
  ) {
    errors.push("Invalid last name");
  }
  if (
    typeof companyName !== "string" ||
    companyName.length < 3 ||
    companyName.length > 31
  ) {
    errors.push("Invalid company name");
  }

  if (
    typeof phoneNumber !== "string" ||
    phoneNumber.length < 3 ||
    phoneNumber.length > 31
  ) {
    errors.push("Invalid phone number");
  }

  return { errors };
}

function getBuyerType(realEstateBuyer, privateBuyer) {
  let buyerType;

  if (realEstateBuyer) {
    buyerType = "real estate";
  } else if (privateBuyer) {
    buyerType = "private";
  } else {
    buyerType = null;
  }

  return buyerType;
}

function getLocation(locationGreece, locationOther) {
  let location;

  if (locationGreece) {
    location = "Greece";
  } else if (locationOther) {
    location = "Other";
  } else {
    location = null;
  }

  return location;
}

function getTimeline(sixMonths, sixToTwelveMonths, twelveMonths) {
  let timeFrame;

  if (sixMonths) {
    timeFrame = "Six months";
  } else if (sixToTwelveMonths) {
    timeFrame = "Six to twelve months";
  } else if (twelveMonths) {
    timeFrame = "More than twelve months";
  } else {
    timeFrame = null;
  }

  return timeFrame;
}

function getInvestment(residential, commercial, land) {
  let investment = [];
  let errors = [];

  if (residential) {
    investment.push("residential");
  }
  if (commercial) {
    investment.push("commerical");
  }
  if (land) {
    investment.push("land");
  }
  if (investment.length == 0) {
    errors.push("Please select an investment type");
  }
  if (errors.length > 0) {
    return { errors };
  }
  // console.log(investment.length);
  return investment;
}

function getInvestmentValue(small, medium, large, xlarge) {
  let investment;

  if (small) {
    investment = "less than 50,000€";
  } else if (medium) {
    investment = "50,000€ - 100,000€";
  } else if (large) {
    investment = "100,000€ - 150,000€";
  } else if (xlarge) {
    investment = "More than 150,000€";
  } else {
    investment = null;
  }

  return investment;
}

function getInvestmentHistory(yes, no) {
  let history;

  if (yes) {
    history = "yes";
  } else if (no) {
    history = "no";
  } else {
    history = null;
  }

  return history;
}

export async function RegisterAction(_, formData) {
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

  // const validatedCredentials = await validateCredentials(
  //   userName,
  //   email,
  //   password,
  //   passwordConfirm
  // );
  // if (validatedCredentials.errors.length > 0) {
  //   return validatedCredentials;
  // }

  // const validatedRegistration = validateRegistration(
  //   firstName,
  //   lastName,
  //   companyName,
  //   phoneNumber
  // );

  // if (validatedRegistration.errors.length > 0) {
  //   return validatedRegistration;
  // }

  // const buyerType = getBuyerType(realEstateBuyer, privateBuyer);

  // const location = getLocation(locationGreece, locationOther);

  // const timeFrame = getTimeline(sixMonths, sixToTwelveMonths, twelveMonths);

  // const propertyTypeInvestment = getInvestment(residential, commercial, land);

  // if (propertyTypeInvestment?.errors?.length > 0) {
  //   return propertyTypeInvestment;
  // }

  // const investmentValue = getInvestmentValue(small, medium, large, xlarge);

  // const investmentHistory = getInvestmentHistory(yes, no);

  // const passwordHash = await new LegacyScrypt().hash(password);
  // const userid = generateIdFromEntropySize(10);

  // try {
  //   const user = await db.user.create({
  //     data: {
  //       id: userid,
  //       username: userName,
  //       firstname: firstName,
  //       lastname: lastName,
  //       email: email,
  //       companyname: companyName,
  //       phonenumber: phoneNumber,
  //       buyertype: buyerType,
  //       location: location,
  //       purchasetimeline: timeFrame,
  //       estinvestmentinterest: investmentValue,
  //       previousinvestment: investmentHistory,
  //       adminaccess: 0,
  //       consultingaccess: 0,
  //       propertyaccess: 0,
  //       accessrequestdate: new Date(),
  //       passwords: {
  //         create: {
  //           hashedPassword: passwordHash,
  //         },
  //       },
  //       investmentinterests: {
  //         createMany: {
  //           data: propertyTypeInvestment.map((el) => ({
  //             interesttype: el,
  //           })),
  //         },
  //       },
  //     },
  //   });
  // } catch (error) {
  //   return { error };
  // }

  // const session = await lucia.createSession(userid, {});
  // const sessionCookie = lucia.createSessionCookie(session.id);
  // cookies().set(
  //   sessionCookie.name,
  //   sessionCookie.value,
  //   sessionCookie.attributes
  // );
  // return redirect("/register/pending-auth");
}
