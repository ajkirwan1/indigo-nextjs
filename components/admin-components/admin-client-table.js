/** @format */
"use client";

import { Suspense } from "react";
import TableFallback from "@/components/fallbacks/table-fallback";
import AdminTableFilter from "@/components/admin-components/admin-table-client-filter";
import Table from "@/components/layouts/table/table";
import classes from "./admin-client-table.module.css";
import PrepareAdminClientData from "@/utils/admin-table-data";
import { FindAllUsers } from "@/server/actions/find-all-users";

function TableData() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const resp = FindAllUsers();

  const { headerData, bodyData } = PrepareAdminClientData(resp);
  const theadData = [...headerData];
  const tbodyData = [...bodyData];

  return (
    <Table theadData={theadData} tbodyData={tbodyData} customClass="admin" />
  );
}

export default function AdminClientTable() {
  return (
    <>
      <AdminTableFilter />
      <div className={classes.tableContainer}>
        <Suspense fallback={<TableFallback />}>
          <TableData />
        </Suspense>
      </div>
    </>
  );
}
