/** @format */

import { validateRequest } from "@/auth/lucia";
import { getProperties } from "@/server/actions/db/properties";
import { redirect } from "next/navigation";
import { getAllProperties } from "@/server/actions/db/all-properties";
import ClientPropertiesList from "@/components/admin-components/client-properties-list";
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
      <ClientPropertiesList allProperties={allProperties} properties={properties}/>
    </>
  );
}
