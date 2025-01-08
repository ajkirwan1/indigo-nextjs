/** @format */

import { validateRequest } from "@/auth/lucia";
import { getProperties } from "@/server/actions/db/properties";
import { UpdatePropertiesAction } from "@/server/actions/admin-update-user-properties";
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
      <div className="header">
        <h1>Client details</h1>
        <hr />
      </div>
      <ClientPropertiesForm
        id={params.id}
        action={UpdatePropertiesAction}
        allProperties={allProperties}
        properties={properties}
      />
    </>
  );
}
