/** @format */

import { validateRequest } from "@/auth/lucia";
import { getUser } from "@/server/actions/db/client";
import { getProperties } from "@/server/actions/db/properties";
import { redirect } from "next/navigation";
import AdminSubmitForm from "@/components/forms/admin-submit-form";
import { AdminSubmit } from "@/server/actions/admin-submit";
import AdminClientPropertyList from "@/components/admin-components/properties-list";
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
    </>
  );
}
