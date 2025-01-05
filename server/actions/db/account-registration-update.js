/** @format */

import db from "@/modules/db";

export async function UpdateUserAccountRegisrationInfo() {
  // const privateBuyer = formData.get("message");
  // const email = formData.get("email");
  // const firstName = formData.get("firstName");
  // const lastName = formData.get("lastName");
  // const contactNumber = formData.get("contactNumber");
  try {
    throw Error;
    const allProperties = await db.property.findMany({});

    return allProperties;
  } catch (error) {
    return {
      dbError: "Error occured submiting to the database",
    };
  }
}
