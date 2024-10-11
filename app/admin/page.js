/** @format */

import { validateRequest } from "@/lib/auth";
import Table from "@/components/layouts/table/table";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { user } = await validateRequest();
  if (user?.adminUser != 1) {
    redirect("/");
  }

  let data
  try {
    const response = await fetch("http://localhost:3000/api/users");
    data = await response.json();
  } catch (error) {
    console.warn("error fetching data", error);
  }

  const theadData = ["Username", "First name", "Last name", "Email", "Property access", "Consulting Access" ]
  let tbodyData = [];

  data.forEach((element, index) => {
    let arr = {};
    arr.id = index;
    arr.items = Object.values(element)
    tbodyData.push(arr);
  });

  return (
    <>
      <Table theadData={theadData} tbodyData={tbodyData}></Table>
    </>
  );
}
