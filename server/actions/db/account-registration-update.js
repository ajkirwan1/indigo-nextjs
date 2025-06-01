/** @format */
"use server";

// import { updateUserRegistration } from "@/server/db"; // Your DB update function (replace with your real import)

export async function UpdateUserAccountRegisrationInfo(_, formData) {
  try {
    // Extract fields from formData
    const location = formData.get("location");
    const investmentInterest = formData.get("investmentInterest");
    const buyerType = formData.get("buyerType");
    const investmentRange = formData.get("investmentRange");
    const purchaseTimeline = formData.get("purchaseTimeline");
    const previousInvestment = formData.get("previousInvestment");

    // Validate data here if needed

    // Call your database update function (implement this in your backend)
    // await updateUserRegistration({
    //   location,
    //   investmentInterest,
    //   buyertype: buyerType,
    //   investmentRange,
    //   purchaseTimeline,
    //   previousInvestment,
    // });

    return {
      errorMessage: "",
      success: true,
    };
  } catch (error) {
    return {
      errorMessage: "Failed to update registration info",
      success: false,
    };
  }
}
