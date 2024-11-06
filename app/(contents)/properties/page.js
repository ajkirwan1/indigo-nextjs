/** @format */
'use server'
import { redirect } from "next/navigation";
import withAuthentication from "@/components/withAuthentication";
import PropertyList from "@/components/pages/properties/property-list";
import { validateRequest } from "/auth/lucia";
import { getProperties } from "@/server/actions/db/properties";
import classes from "./page.module.css";
import { headers } from "next/headers";

async function Properties({userId}) {
  const properties = await getProperties(userId);
  return <PropertyList properties={properties} />;
}

async function PropertiesPage() {
  const { user } = await validateRequest();
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  if (!user) {
    redirect(`/login?next=${pathname}`);
  }
  console.log(user);
  const userId = user.id;

  return (
    <>
      <div className={classes.subHeader}>
        <h1>PROPERTIES FOR SALE</h1>
      </div>
      <Properties userId={userId}/>
    </>
  );
}

export default withAuthentication(PropertiesPage);
