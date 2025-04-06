/** @format */
'use server'
import db from "@/modules/db";

export async function GetUserRegistrationInformation(id) {
  try {
    const transaction = await db.$transaction([
      db.user.findFirst({
        where: { id: id },
      }),
      db.investmentinterest.findMany({
        where: {
          userId: id,
        },
      }),
    ]);

    // console.log(transaction, "CHANFE")

    return transaction;
  } catch (error) {
    return { dbFetchError: "An error occured fetching the user information." };
  }
}
