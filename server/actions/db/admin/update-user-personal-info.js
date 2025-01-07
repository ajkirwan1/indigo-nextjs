/** @format */
'use server'
import db from "@/modules/db";

export async function UpdateUserPersonalInfo(data, id) {
  try {

    const udpateUserPersonalInfo = await db.user.update({
      where: {
        id: id,
      },
      data: {
        username: data.userName,
        email: data.email,
        firstname: data.firstName,
        lastname: data.lastName,
        companyname: data.companyName,
        phonenumber: data.phoneNumber
      },
    });

    return udpateUserPersonalInfo;
  } catch (error) {
    return { dbError: "An error occured writing to the database" };
  }
}
