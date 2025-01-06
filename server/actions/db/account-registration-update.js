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

    console.log(buyer);
    console.log(location);
    console.log(time);
    console.log(investmentInterestArray);
    console.log(capital);
    console.log(previous);

    // console.log(state)
    // console.log(privateBuyer);
    // console.log(realEstateBuyer);
    // console.log(id);

    // for (const [key, value] of Object.entries(data.investmentInterest)) {
    //   if (value == true) {
    //     investmentInterestArray.push(key);
    //   }
    // }

    // const user = await db.user.create({
    //   data: {
    //     id: userId,
    //     username: data.userName,
    //     firstname: data.firstName,
    //     lastname: data.lastName,
    //     email: data.email,
    //     companyname: data.companyName,
    //     phonenumber: data.phoneNumber,
    //     buyertype: data.buyerType,
    //     location: data.location,
    //     purchasetimeline: data.timeFrame,
    //     estinvestmentinterest: data.investmentValue,
    //     previousinvestment: data.investmentHistory,
    //     adminaccess: 0,
    //     consultingaccess: 0,
    //     propertyaccess: 0,
    //     accessrequestdate: new Date(),
    //     passwords: {
    //       create: {
    //         hashedPassword: passwordHash,
    //       },
    //     },
    //     investmentinterests: {
    //       createMany: {
    //         data: investmentInterestArray.map((el) => ({
    //           interesttype: el,
    //         })),
    //       },
    //     },
    //   },
    // });
  } catch (error) {
    return {
      dbError: "Error occured submiting to the database",
    };
  }

  // try {
  //   throw Error;
  //   const allProperties = await db.property.findMany({});

  //   return allProperties;
  // } catch (error) {
  //   return {
  //     dbError: "Error occured submiting to the database",
  //   };
  // }
}
