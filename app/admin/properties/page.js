/** @format */

import { validateRequest } from "@/auth/lucia";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";
import PrepareAdminClientData from "@/utils/admin-table-data";
import { FindAllUsers } from "@/server/actions/find-all-users";
import classes from "./page.module.css";
import { Suspense } from "react";
import PrepareAdminPropertyData from "@/utils/admin/admin-property-table-data";
import PropertyTableFallback from "@/components/fallbacks/property-table-fallback";
import { FindAllProperties } from "@/server/actions/db/admin/properties/get-properties/get-all-properties";

async function TableData() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const resp = await FindAllProperties();

  const { headerData, bodyData } = PrepareAdminPropertyData(resp);
  const theadData = [...headerData];
  const tbodyData = [...bodyData];

  return (
    <Table theadData={theadData} tbodyData={tbodyData} customClass="admin" />
  );
}

export default async function PropertyPage() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/");
  }
  if (user?.adminaccess != 2) {
    redirect("/");
  }

  return (
    <div className={classes.tableContainer}>
      <h1>All Properties</h1>
      <Suspense fallback={<PropertyTableFallback />}>
        <TableData />
      </Suspense>
    </div>
  );
}
