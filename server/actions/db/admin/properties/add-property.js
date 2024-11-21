/** @format */
"use server";

import { uploadPdfToS3 } from "@/server/actions/s3/pdfs/upload-pdf-to-s3";
import { uploadImageToS3 } from "@/server/actions/s3/upload-image-to-s3";
import { generateIdFromEntropySize } from "lucia";

export async function AddProperty(state, formData, data) {
  // const image = formData.get("image");
  // uploadImageToS3(formData, {
  //   bucket: process.env.AWS_BUCKET_NAME,
  //   key: generateIdFromEntropySize(10),
  // });

  // uploadPdfToS3(formData, {
  //   bucket: process.env.AWS_BUCKET_NAME,
  //   key: generateIdFromEntropySize(10),
  // });

  try {
    const user = await db.user.create({
      data: {
        id: userid,
        username: userName,
        firstname: firstName,
        lastname: lastName,
        email: email,
        companyname: companyName,
        phonenumber: phoneNumber,
        buyertype: buyerType,
        location: location,
        purchasetimeline: timeFrame,
        estinvestmentinterest: investmentValue,
        previousinvestment: investmentHistory,
        adminaccess: 0,
        consultingaccess: 0,
        propertyaccess: 0,
        accessrequestdate: new Date(),
        passwords: {
          create: {
            hashedPassword: passwordHash,
          },
        },
        investmentinterests: {
          createMany: {
            data: propertyTypeInvestment.map((el) => ({
              interesttype: el,
            })),
          },
        },
      },
    });
  } catch (error) {
    return { error };
  }

  const change = await db.$transaction([
    db.usersOnProperties.deleteMany({
      where: {
        userId: id,
      },
    }),
    db.usersOnProperties.createMany({
      data: listOfIds.map((el) => ({
        userId: id,
        propertyId: el,
      })),
    }),
  ]);

  // console.log(image);
}
