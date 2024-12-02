/** @format */
"use server";
import { LegacyScrypt } from "lucia";

import { cookies } from "next/headers";
import { lucia } from "@/auth/lucia";
import { generateIdFromEntropySize } from "lucia";
import { redirect } from "next/navigation";

import db from "@/modules/db";


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

export async function NewRegisterAction2(initialState, formData) {
  // const userName = initialState["userName"]
  // const email = initialState["email"]
  // const password = initialState["password"]
  // const passwordConfirm = initialState["passwordConfirm"]
  // const firstName = initialState["firstName"]
  // const lastName = initialState["lastName"]
  // const companyName = initialState["companyName"]
  // const phoneNumber = initialState["phoneNumber"]


  // const privateBuyer = formData.get("privateBuyer");
  // const realEstateBuyer = formData.get("realEstateBuyer");
  // const locationGreece = formData.get("locationGreece");
  // const locationOther = formData.get("locationOther");
  // const sixMonths = formData.get("sixMonths");
  // const sixToTwelveMonths = formData.get("sixToTwelveMonths");
  // const twelveMonths = formData.get("twelveMonths");
  // const residential = formData.get("residential");
  // const commercial = formData.get("commercial");
  // const land = formData.get("land");
  // const small = formData.get("50");
  // const medium = formData.get("50-100");
  // const large = formData.get("100-150");
  // const xlarge = formData.get("150+");
  // const yes = formData.get("yes");
  // const no = formData.get("no");

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

  // return { confirmed: true };
}
