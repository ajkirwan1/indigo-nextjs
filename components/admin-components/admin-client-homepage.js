/** @format */



import classes from "./admin-client-homepage.module.css";
import Link from "next/link";
import { GetNewUsers } from "@/server/actions/db/admin/get-new-users";

export default async function AdminClientHomepage() {

  const newUsersLastSevenDays = await GetNewUsers()
  const numberOfNewUsers = newUsersLastSevenDays.length

  return (
    <>
      <div className={classes.infoContainer}>
        <h2>Client Data</h2>
        <p>Links and information related to clients who have registered</p>
        <div className={classes.dataWrapper}>
          <div>
            <h3>Recently joined</h3>
            <span>{numberOfNewUsers}</span>
          </div>
          <div>
            <h3>Pending registration</h3>
            <span>5</span>
          </div>
        </div>
        <Link href="/admin/user">All users</Link>
      </div>
    </>
  );
}
