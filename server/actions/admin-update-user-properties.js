/** @format */
"use server";
import db from "@/modules/db";
import { validateRequest } from "@/auth/lucia";
import { redirect } from "next/navigation";

export async function UpdatePropertiesAction(initialState, formData) {
  const id = initialState.id;

  console.log(id);
  //   const { user } = await validateRequest();

  //   const newObj = Object.values(formData).filter((val) =>
  //     val.includes("on")
  //   );
  //   console.log(user)
  const formDataObj = {};
  formData.forEach((val, key) => {
    if (val == "on") {
      formDataObj[key] = val;
    }
  });

  const list = Object.keys(formDataObj);

  const result1 = await db.property.findMany({
    where: {
      name: { in: list },
    },
    select: {
        id: true
    }
  });

  let listOfIds = [];

  result1.forEach(element => {
    // console.log(element, "element");
    listOfIds.push(element.id)
  });

  console.log(listOfIds)

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
