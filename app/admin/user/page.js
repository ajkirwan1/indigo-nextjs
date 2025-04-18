/** @format */

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

async function TableData({ query, name, email }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

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

  if (resp.message) {
    return (<h2>An error occured fetching the data</h2>)
  }

  resp = resp.filter(
    (user) => user.firstname.includes(name) || user.lastname.includes(name)
  );

  resp = resp.filter((user) => user.email.includes(email));

  const { headerData,  bodyData2 } = PrepareAdminClientData(resp);

  const theadData = [...headerData];
  const tbodyData = [...bodyData2];

  return (
    <Table
      theadData={theadData}
      tbodyData={tbodyData}
      customClass="admin"
    />
  );
}

export default async function AdminPage(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const name = searchParams?.name || "";
  const email = searchParams?.email || "";

  return (
    <>
      <title>Indigo Consulting Registered Users</title>
      <div className="header">
        <h1>REGISTERED USERS</h1>
        <hr />
      </div>
      <div className={classes.filterContainer}>
        <AdminTableFilter />
      </div>
      <div className={classes.tableContainer}>
        <Suspense fallback={<TableFallback />}>
          <TableData query={query} name={name} email={email} />
        </Suspense>
      </div>
    </>
  );
}
