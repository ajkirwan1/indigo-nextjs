'use server'
import { GetPendingUsers } from "@/server/actions/db/admin/get-pending-users";

export default async function PendingUsers() {

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const result = await GetPendingUsers();

  if (result.message) {
    return (
      <>
        <span>!</span>
        <p>An error occured fetching this data</p>
      </>
    );
  }
  const numberOfPendingUsers = result.length;

  return <span>{numberOfPendingUsers}</span>;
}
