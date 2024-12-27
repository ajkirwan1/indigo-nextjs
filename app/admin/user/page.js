/** @format */

import { validateRequest } from "@/auth/lucia";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";
import PrepareAdminClientData from "@/utils/admin-table-data";
import { FindAllUsers } from "@/server/actions/find-all-users";
import { GetNewUsers } from "@/server/actions/db/admin/get-new-users";
import { GetPendingUsers } from "@/server/actions/db/admin/get-pending-users";
import classes from "./page.module.css";
import { Suspense } from "react";
import TableFallback from "@/components/fallbacks/table-fallback";
import AdminTableFilter from "@/components/admin-components/admin-table-client-filter";

async function TableData({ query }) {
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  let resp;

  if (query == "pending") {
    resp = await GetPendingUsers();
  } else if (query == "recent") {
    resp = await GetNewUsers();
  } else if (query == "all") {
    resp = await FindAllUsers();
  } else {
    resp = await FindAllUsers();
  }

  console.log(resp);

  // const filteredVal = resp.filter(val => val.username.includes("prop"))

  // console.log(filteredVal, "FIL")

  const { headerData, bodyData } = PrepareAdminClientData(resp);
  const theadData = [...headerData];
  const tbodyData = [...bodyData];

  return (
    <Table theadData={theadData} tbodyData={tbodyData} customClass="admin" />
  );
}

export default async function AdminPage(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  console.log(query);

  const { user } = await validateRequest();

  if (!user) {
    redirect("/");
  }
  if (user?.adminaccess != 2) {
    redirect("/");
  }

  return (
    <>
      <title>Indigo Consulting Registered Users</title>
      <div className="header">
        <h1>REGISTERED USERS</h1>
        <hr />
      </div>
      <AdminTableFilter />
      <div className={classes.tableContainer}>
        <Suspense fallback={<TableFallback />}>
          <TableData query={query} />
        </Suspense>
      </div>
    </>
  );
}
