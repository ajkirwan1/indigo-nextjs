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

  let data
  try {
    const response = await fetch("http://localhost:3000/api/users");
    data = await response.json();

    // util function to prepare data
    const result = PrepareAdminClientData(data)
    console.log(result, "the result is:")
    
  } catch (error) {
    console.warn("error fetching data", error);
  }

  const theadData = ["id", "Username", "First name", "Last name", "Email", "Property access", "Consulting access", "Date of request" ]
  let tbodyData = [];

  data.forEach((element, index) => {
    let arr = {};
    arr.id = index;
    arr.items = Object.values(element)
    tbodyData.push(arr);
  });

  return (
    <>
    <h1>Hi Emmanuel</h1>
    <h2>List of registered users</h2>
      <Table theadData={theadData} tbodyData={tbodyData} customClass="admin"></Table>
    </>
  );
}
