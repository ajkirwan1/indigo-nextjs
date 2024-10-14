/** @format */

import { validateRequest } from "@/lib/auth";
import { getUser } from "@/server/actions/db/client";
import { redirect } from "next/navigation";
import AdminSubmitForm from "@/components/forms/admin-submit-form";
import { AdminSubmit } from "@/server/actions/admin-submit";

export default async function AdminClientPage({ params }) {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/");
  }
  if (user?.adminUser != 2) {
    redirect("/");
  }
  const { username, first_name, email } = await getUser(params.id);

  return (
    <>
      <h1>{username}</h1>
      <h1>{first_name}</h1>
      <h1>{email}</h1>
      <AdminSubmitForm id={params.id} action={AdminSubmit}></AdminSubmitForm>
    </>
  );
}
