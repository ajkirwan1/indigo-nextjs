/** @format */
"use server";
import db from "@/modules/db";

export async function UpdateUserAccountRegisrationInfo(state, formData, id) {
  // console.log(state)
  try {
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

    const fifty = formData.get("50");
    const fiftyToHundred = formData.get("50-100");
    const hundredToHundredFifty = formData.get("100-150");

    const previousInvestmentYes = formData.get("yes");
    const previousInvestmentNo = formData.get("no");

    console.log(state)
    console.log(privateBuyer);
    console.log(realEstateBuyer);
    console.log(id);


    let investmentInterestArray = [];

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
