/** @format */

import { validateRequest } from "@/auth/lucia";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";
import PrepareAdminClientData from "@/utils/admin-table-data";
import { FindAllUsers } from "@/server/actions/find-all-users";
import classes from "./page.module.css";
import { Suspense } from "react";
import TableFallback from "@/components/fallbacks/table-fallback";

async function TableData() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const resp = await FindAllUsers();

  const { headerData, bodyData } = PrepareAdminClientData(resp);
  const theadData = [...headerData];
  const tbodyData = [...bodyData];

  return (
    <Table theadData={theadData} tbodyData={tbodyData} customClass="admin" />
  );
}

export default async function AdminPage() {
  const { user } = await validateRequest();
  console.log("ADMIN USER", user);

  if (!user) {
    redirect("/");
  }
  if (user?.adminaccess != 2) {
    redirect("/");
  }

  return (
    <div className={classes.tableContainer}>
      <h1>LIST OF REGISTERED USERS</h1>
      <Suspense fallback={<TableFallback />}>
        <TableData />
      </Suspense>
    </div>
  );
}
