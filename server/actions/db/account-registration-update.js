/** @format */
"use server";
import db from "@/modules/db";

export async function UpdateUserAccountRegisrationInfo(state, formData, id) {
  // console.log(state)
  try {
    let buyer;
    let location;
    let time;
    let type;
    let capital;
    let previous;

    const privateBuyer = formData.get("privateBuyer");
    const realEstateBuyer = formData.get("realEstateBuyer");

    const locationOther = formData.get("locationOther");
    const locationGreece = formData.get("locationGreece");

    const sixMonths = formData.get("sixMonths");
    const sixToTwelveMonths = formData.get("sixToTwelveMonths");
    const twelveMonths = formData.get("twelveMonths");

    const residential = formData.get("residential");
    const commercial = formData.get("commercial");
    const land = formData.get("land");

    let investmentInterestArray = [];

    const fifty = formData.get("50");
    const fiftyToHundred = formData.get("50-100");
    const hundredToHundredFifty = formData.get("100-150");

    const previousInvestmentYes = formData.get("yes");
    const previousInvestmentNo = formData.get("no");

    if (privateBuyer == "on") {
      buyer = "privateBuyer";
    } else {
      buyer = "realEstateBuyer";
    }

    if (locationOther == "on") {
      location = "locationOther";
    } else {
      location = "locationGreece";
    }

    if (sixMonths == "on") {
      time = "sixMonths";
    } else if (sixToTwelveMonths == "on") {
      time = "sixToTwelveMonths";
    } else {
      time = "twelveMonths";
    }

    if (residential == "on") {
      investmentInterestArray.push("residential");
    }
    if (commercial == "on") {
      investmentInterestArray.push("commercial");
    }
    if (land == "on") {
      investmentInterestArray.push("land");
    }

    if (fifty == "on") {
      capital = "50";
    } else if (fiftyToHundred == "on") {
      capital = "50-100";
    } else {
      capital = "100-150";
    }

    if (previousInvestmentYes == "on") {
      previous = "yes";
    } else {
      previous = "no";
    }

    throw Error

  } catch (error) {
    return {
      dbError: "Error occured submiting to the database",
    };
  }
}
