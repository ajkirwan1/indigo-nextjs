/** @format */

import { validateRequest } from "@/auth/lucia";
import { getProperties } from "@/server/actions/db/properties";
import { redirect } from "next/navigation";
import { getAllProperties } from "@/server/actions/db/all-properties";
import ClientPropertiesForm from "@/components/forms/client-properties-form";
import classes from "./page.module.css";

export default async function ClientProperties({ params }) {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/");
  }
  if (user?.adminaccess != 2) {
    redirect("/");
  }
  const allProperties = await getAllProperties();

  const properties = await getProperties(params.id);

  return (
    <>
    <p>Back</p>
      {/* <ClientPropertiesList action={RegisterAction} allProperties={allProperties} properties={properties}/> */}
      <ClientPropertiesForm allProperties={allProperties} properties={properties}/>
      {/* <ClientPropertiesForm allProperties={allProperties} properties={properties} id={params.id} action={UpdatePropertiesAction}/> */}
    </>
  );
}
