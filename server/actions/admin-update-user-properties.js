/** @format */
"use server";
import db from "@/modules/db";
import { validateRequest } from "@/auth/lucia";
import { redirect } from "next/navigation";

export async function UpdatePropertiesAction(initialState, formData) {
  //   const id = initialState.id;
  const { user } = await validateRequest();

  //   const newObj = Object.values(formData).filter((val) =>
  //     val.includes("on")
  //   );
  const formDataObj = {};
  formData.forEach((val, key) => {
    if (val == "on") {
      formDataObj[key] = val;
    }
  });

  // let newObj = Object.values(formData)

  console.log("NEWOBJ", formDataObj);
  console.log(user.id);
  //   console.log(id, "id");
  console.log(formData, "FORMDATA");
  //   const consulting = formData.get("consulting") == "on" ?  2  : 4;
  //   const properties = formData.get("properties") == "on" ?  2  : 4;

  // user.run(properties, consulting, id);
  // return redirect("/admin")
}
