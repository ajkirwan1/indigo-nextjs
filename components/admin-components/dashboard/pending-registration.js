'use server'
import { GetPendingUsers } from "@/server/actions/db/admin/get-pending-users";

export default async function PendingUsers() {
  const result = await GetPendingUsers();

  if (result.message) {
    return (
      <>
        <span>!</span>
        <p>An error occured fetching this data</p>
      </>
    );
  }
  const numberOfPendingUsers = result.data.length;

  return <span>{numberOfPendingUsers}</span>;
}
