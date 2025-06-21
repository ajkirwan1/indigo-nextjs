/** @format */

"use server";
import { FindAllUsers } from "@/server/actions/find-all-users";

export default async function AllUsers() {
  const result = await FindAllUsers();

  if (result.message) {
    return (
      <>
        <span>!</span>
        <p>An error occured fetching this data</p>
      </>
    );
  }
  const totalNumberOfUsers = result.data.length;

  return <span>{totalNumberOfUsers}</span>;
}
