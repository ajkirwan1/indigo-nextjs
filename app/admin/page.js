/** @format */

import { validateRequest } from "@/lib/auth";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";
import PrepareAdminClientData from "@/utils/admin-table-data";

export default async function AdminPage() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/")
  }
  if (user?.adminUser != 1) {
    redirect("/");
  }

  let theadData, tbodyData;


  try {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    const {headerData, bodyData} = PrepareAdminClientData(data)
    theadData = [...headerData]
    tbodyData = [...bodyData]
    
  } catch (error) {
    // console.warn("error fetching data", error);
    throw new Error("Data collection failed", error)
  }

  return (
    <>
     <h1>Hi Emmanuel</h1>
    <h2>List of registered users</h2>
      <Table theadData={theadData} tbodyData={tbodyData} customClass="admin"></Table>
    </>
  );
}
