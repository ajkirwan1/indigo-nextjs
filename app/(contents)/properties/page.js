/** @format */
import { redirect } from "next/navigation";
import withAuthentication from "@/components/withAuthentication";
import PropertyList from "@/components/pages/properties/property-list";
import { validateRequest } from "@/lib/auth";
import { getProperties } from "@/server/actions/db/properties";

async function Properties() {
  const properties = await getProperties();
  return <PropertyList projects={properties} />;
}

async function PropertiesPage() {

  return (
    <>
      <Properties />
    </>
  );
}

export default withAuthentication(PropertiesPage);
