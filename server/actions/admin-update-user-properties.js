/** @format */
"use server";
import db from "@/modules/db";
import { validateRequest } from "@/auth/lucia";
import { redirect } from "next/navigation";

export async function UpdatePropertiesAction(initialState, formData) {
  const id = initialState.id;

  const formDataObj = {};
  formData.forEach((val, key) => {
    if (val == "on") {
      formDataObj[key] = val;
    }
  });

  const formDataKeys = Object.keys(formDataObj);

  const propertyIds = await db.property.findMany({
    where: {
      name: { in: formDataKeys },
    },
    select: {
        id: true
    }
  });

  let listOfIds = [];

  propertyIds.forEach(element => {
    listOfIds.push(element.id)
  });


    const change = await db.$transaction([
      db.usersOnProperties.deleteMany({
        where: {
          userId: id,
        },
      }),
      db.usersOnProperties.createMany({
          data: listOfIds.map((el) => ({
            userId: id,
            propertyId: el

          }))
      })
    ]);


  return redirect(`/admin/user/${id}`);
}
