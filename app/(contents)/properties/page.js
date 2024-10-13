/** @format */
import { redirect } from "next/navigation";
import withAuthentication from "@/components/withAuthentication";
import PropertyList from "@/components/pages/properties/property-list";
import { validateRequest } from "@/lib/auth";
import { getProperties } from "@/server/actions/db/properties";
import classes from "./page.module.css"
import { headers } from "next/headers";

async function Properties() {
  const properties = await getProperties();
  return <PropertyList properties={properties} />;
}

async function PropertiesPage() {

  const {user}= await validateRequest();
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  if (!user)
    {
      redirect(`/login?next=${pathname}`)
    }

  return (
    <>
     <div className={classes.subHeader}>
          <h1>PROPERTIES FOR SALE</h1>
          </div>
      <Properties />
    </>
  );
}

export default withAuthentication(PropertiesPage);
