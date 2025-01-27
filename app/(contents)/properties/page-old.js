/** @format */
"use server";
import { redirect } from "next/navigation";
import withAuthentication from "@/components/withAuthentication";
import PropertyList from "@/components/pages/properties/property-list";
import { validateRequest } from "/auth/lucia";
import { getProperties } from "@/server/actions/db/properties";
import classes from "./page.module.css";
import { headers } from "next/headers";
import { Spinner } from "@nextui-org/spinner";

async function Properties({ userId }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
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
  const userId = user.id;

  return (
    <>
      <div className={classes.header}>
        <h1>PROPERTIES FOR SALE</h1>
        <hr />
      </div>
      <div className={classes.subSubHeader}>
        <p>
          Welcome to the luxurious selection of properties curated by Indigo
          Consulting.Explore ongoing developments meticulously managed by our
          consultancy services, tailored for discerning investors. Discover
          carefully selected future projects endorsed by investors in
          collaboration with Indigo Consulting.From developers not directly
          affiliated with our consultancy.
        </p>
      </div>
      <Properties userId={userId} />
    </>
  );
}

export default withAuthentication(PropertiesPage);
