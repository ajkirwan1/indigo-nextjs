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
  await new Promise((resolve) => setTimeout(resolve, 10000));
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

  // let theadData, tbodyData;

  // try {
  //   // const response = await fetch("http://localhost:3000/api/users");
  //   // const data = await response.json();
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   const resp = await FindAllUsers();

  //   // console.log("DATA", data)
  //   console.log("RESPONSE", resp);

  //   const { headerData, bodyData } = PrepareAdminClientData(resp);
  //   theadData = [...headerData];
  //   tbodyData = [...bodyData];
  // } catch (error) {
  //   throw new Error("Data collection failed", error);
  // }

  return (
    <div className={classes.tableContainer}>
      <h1>LIST OF REGISTERED USERS</h1>
      <Suspense fallback={<TableFallback />}>
        <TableData />
      </Suspense>
    </div>
  );
}
