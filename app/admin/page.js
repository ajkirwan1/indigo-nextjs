/** @format */

import { validateRequest } from "@/auth/lucia";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";
import PrepareAdminClientData from "@/utils/admin-table-data";
import { FindAllUsers } from "@/server/actions/find-all-users";

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

    const resp = await FindAllUsers()

    console.log("DATA", data)
    console.log("RESPONSE", resp)

    const {headerData, bodyData} = PrepareAdminClientData(resp)
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
