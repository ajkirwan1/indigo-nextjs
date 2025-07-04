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
import NextUiTable from "@/components/layouts/table/nextui-table";

// async function TableData({ query, name, email }) {

//   let resp;

//   if (query == "pending") {
//     const result = await GetPendingUsers()
//     resp = result.data
//   } else if (query == "recent") {
//     const result = await GetNewUsers();
//     resp = result.data;
//   } else if (query == "all") {
//     const result = await FindAllUsers();
//     resp = result.data;
//   } else {
//     const result = await FindAllUsers();
//     resp = result.data;
//   }

//   // resp = await GetPendingUsers()

//   // if (resp.message) {
//   //   return (<h2>An error occured fetching the data</h2>)
//   // }

//   // resp = resp.filter(
//   //   (user) => user.firstname.includes(name) || user.lastname.includes(name)
//   // );

//   // resp = resp.filter((user) => user.email.includes(email));

//   const { headerData,  bodyData2 } = PrepareAdminClientData(resp);

//   const theadData = [...headerData];
//   const tbodyData = [...bodyData2];

//   return (
//     <Table
//       theadData={theadData}
//       tbodyData={tbodyData}
//       customClass="admin"
//     />
//   );
// }

// export default async function AdminPage(props) {
//   const searchParams = await props.searchParams;
//   const query = searchParams?.query || "";
//   const name = searchParams?.name || "";
//   const email = searchParams?.email || "";

//   return (
//     <>
//       <title>Indigo Consulting Registered Users</title>
//       <div className="header">
//         <h1>REGISTERED USERS</h1>
//         <hr />
//       </div>
//       {/* <div className={classes.filterContainer}>
//         <AdminTableFilter />
//       </div> */}
//       <div className={classes.tableContainer}>
//         {/* <Suspense fallback={<TableFallback />}> */}
//           <TableData query={query} name={name} email={email} />
//         {/* </Suspense> */}
//       </div>
//     </>
//   );
// }

export default async function AdminPage({ searchParams }) {
  const query = searchParams?.query || "all";

  let users;
  if (query === "pending") {
    const result = await GetPendingUsers();
    users = result.data;
  } else if (query === "recent") {
    const result = await GetNewUsers();
    users = result.data;
  } else {
    const result = await FindAllUsers();
    users = result.data;
  }

  return (
    <>
      <title>Indigo Consulting Registered Users</title>
      <div className="header">
        <h1>REGISTERED USERS</h1>
        <hr />
      </div>
      <div className={classes.tableContainer}>

        <NextUiTable users={users} />
      </div>
    </>
  );
}