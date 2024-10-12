/** @format */

import { validateRequest } from "@/lib/auth";
import { getUser } from "@/server/actions/db/client";
import { redirect } from "next/navigation";

export default async function AdminClientPage({ params }) {
  console.log(params.id)
  const { user } = await validateRequest();

  if (!user) {
    redirect("/");
  }
  if (user?.adminUser != 1) {
    redirect("/");
  }
  const {username, first_name, email } = await getUser(params.id);
  
  return (
    <>
      <h1>{username}</h1>
      <h1>{first_name}</h1>
      <h1>{email}</h1>
    </>
  );
}
