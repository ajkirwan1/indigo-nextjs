/** @format */

"use server";

import { GetNewUsers } from "@/server/actions/db/admin/get-new-users";
import { Tooltip } from "@nextui-org/react";

export default async function NewUsers() {
  await new Promise((resolve) => setTimeout(resolve, 8000));
  const result = await GetNewUsers();

  if (result.message) {
    return (
      <>
        <span>!</span>
        <p>An error occured fetching this data</p>
      </>
      // <Tooltip color="danger" content="A AM A TOOLTIP">

      // </Tooltip>
    );
  }

  const numberOfNewUsers = result.length;

  return <span>{numberOfNewUsers}</span>;
}
