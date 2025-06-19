/** @format */

"use server";
import { FindAllUsers } from "@/server/actions/find-all-users";

export default async function AllUsers() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const result = await FindAllUsers();

  if (result.message) {
    return (
      <>
        <span>!</span>
        <p>An error occured fetching this data</p>
      </>
    );
  }
  const totalNumberOfUsers = result.length;

  return <span>{totalNumberOfUsers}</span>;
}
