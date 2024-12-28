/** @format */

import classes from "./admin-client-homepage.module.css";
import Link from "next/link";
import { GetNewUsers } from "@/server/actions/db/admin/get-new-users";
import { GetPendingUsers } from "@/server/actions/db/admin/get-pending-users";

export default async function AdminClientHomepage() {
  const newUsersLastSevenDays = await GetNewUsers();
  const numberOfNewUsers = newUsersLastSevenDays.length;
  const pendingUsers = await GetPendingUsers();
  const numberOfPendingUsers = pendingUsers.length;

  return (
    <>
      <div className={classes.infoContainer}>
        <h2>Client Data</h2>
        <p>Links and information related to clients who have registered</p>
        <div className={classes.dataWrapper}>
          <div>
            <Link href="admin/user?query=recent&firstnav=true">
              <h3>Recently joined</h3>
              <span>{numberOfNewUsers}</span>
            </Link>
          </div>
          <div>
            <Link href="admin/user?query=pending&firstnav=true">
              <h3>Pending registration</h3>
              <span>{numberOfPendingUsers}</span>
            </Link>
          </div>
        </div>
        <Link href="/admin/user">All users</Link>
      </div>
    </>
  );
}
