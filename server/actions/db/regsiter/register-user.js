/** @format */

"use server";

import db from "@/modules/db";
import ValidateContactForm from "@/utils/validation/register-form-validation";

export async function RegisterUser(data) {
  const {
    companyName,
    email,
    confirmEmail,
    phoneNumber,
    buyerType,
    location,
    purchaseTimeline,
    investmentInterest,
    investmentRange,
    previousInvestment
  } = data;

  try {
    const result = ValidateContactForm(
      companyName,
      email,
      confirmEmail,
      phoneNumber
    );

    if (!result?.success) {
      return result
    }

    const userRegistration = await db.userRegistration.create({
      data: {
        name: companyName,
        email: email,
        phoneNumber: phoneNumber,
        buyertype: buyerType,
        location: location,
        purchaseTimeline: purchaseTimeline,
        investmentInterest: investmentInterest,
        investmentRange: investmentRange,
        previousInvestment: previousInvestment,
      },
    });
    console.log(userRegistration)

    return result;
  } catch (error) {
    console.log(error, "ERROR");
  }
}
