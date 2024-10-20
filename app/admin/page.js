/** @format */

import { validateRequest } from "@/auth/lucia";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";
import PrepareAdminClientData from "@/utils/admin-table-data";

export default async function AdminPage() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/")
  }
  if (user?.adminUser != 2) {
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
      throw new Error("Data collection failed", error)
  }

  return (
    <>
      <h1>Hi Emmanuel</h1>
      <h2>List of registered users</h2>
      <Table theadData={theadData} tbodyData={tbodyData} customClass="admin" />
    </>
  );
}
