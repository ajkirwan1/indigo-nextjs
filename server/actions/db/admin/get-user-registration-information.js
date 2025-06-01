/** @format */
"use server";
import db from "@/modules/db";

export async function GetUserRegistrationInformation(id) {
  console.log(id)
  try {
    const userWithRegistration = await db.userNew.findUnique({
      where: {
        id: id,
      },
      include: {
        registration: true,
      },
    });

    return userWithRegistration;
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
