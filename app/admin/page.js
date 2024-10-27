/** @format */

import { validateRequest } from "@/auth/lucia";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";
import PrepareAdminClientData from "@/utils/admin-table-data";

export default async function AdminPage() {
  const { user } = await validateRequest();
  console.log("ADMIN USER", user)

  if (!user) {
    redirect("/")
  }
  if (user?.adminaccess != 2) {
    redirect("/");
  }

  let theadData, tbodyData;


  try {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    console.log(data)

    const {headerData, bodyData} = PrepareAdminClientData(data)
    theadData = [...headerData]
    tbodyData = [...bodyData]
    
  } catch (error) {
      throw new Error("Data collection failed", error)
  }

  return (
    <>
      <h1>List of registered users</h1>
      <Table theadData={theadData} tbodyData={tbodyData} customClass="admin" />
    </>
  );
}
