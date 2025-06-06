/** @format */
"use server";

import db from "@/modules/db";

export async function UpdateUserAccountRegisrationInfo(state, formData) {
  try {
    const location = formData.get("location");
    const investmentInterest = formData.get("investmentInterest");
    const buyerType = formData.get("buyertype");
    const investmentRange = formData.get("investmentRange");
    const purchaseTimeline = formData.get("purchaseTimeline");
    const previousInvestment = formData.get("previousInvestment");

    const userId = state.id;

    console.log(userId, "UserNew ID");

    // Step 1: Find the associated UserRegistration ID
    const user = await db.userNew.findUnique({
      where: { id: userId },
      select: { registrationId: true },
    });

    console.log(user, "USER")

    if (!user || !user.registrationId) {
      throw new Error("User or associated registration not found.");
    }

    // Step 2: Update the UserRegistration record
    const userRegistrationInfo = await db.userRegistration.update({
      where: { id: user.registrationId },
      data: {
        location,
        investmentInterest,
        buyertype: buyerType,
        investmentRange,
        purchaseTimeline,
        previousInvestment,
      },
    });

    console.log(userRegistrationInfo, 'userRegistrationInfo')

    return {
      id: userId,
      errorMessage: "",
      success: true,
      editable: false
    };
  } catch (error) {
    console.error("Error updating registration:", error);
    return {
      id: userId,
      errorMessage: "Failed to update registration info",
      success: false,
      editable: false
    };
  }
}