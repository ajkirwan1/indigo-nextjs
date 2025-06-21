/** @format */

"use server";

import { GetNewUsers } from "@/server/actions/db/admin/get-new-users";

export default async function NewUsers() {
  const result = await GetNewUsers();

  if (result.message) {
    return (
      <>
        <span>!</span>
        <p>An error occured fetching this data</p>
      </>
    );
  }

  const numberOfNewUsers = result.data.length;

  return <span>{numberOfNewUsers}</span>;
}
