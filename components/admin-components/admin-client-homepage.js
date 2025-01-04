/** @format */

import classes from "./admin-client-homepage.module.css";
import Link from "next/link";
import NewUsers from "./dashboard/recently-joined";
import { Suspense } from "react";
import PendingUsers from "./dashboard/pending-registration";
import { Spinner } from "@nextui-org/spinner";
import AllUsers from "./dashboard/all-users";

export default async function AdminClientHomepage() {

  return (
    <>
      <div className={classes.infoContainer}>
        <h2>Client Data</h2>
        <p>Links and information related to clients who have registered</p>
        <div className={classes.dataWrapper}>
          <div>
            <Link href="admin/user?query=recent&firstnav=true">
              <h3>Recently joined</h3>
              <Suspense
                fallback={
                  <Spinner color="default" size="lg" className="spinner" />
                }
              >
                <NewUsers />
              </Suspense>
            </Link>
          </div>
          <div>
            <Link href="admin/user?query=pending&firstnav=true">
              <h3>Pending registration</h3>
              <Suspense
                fallback={
                  <Spinner color="default" size="lg" className="spinner" />
                }
              >
                <PendingUsers />
              </Suspense>
            </Link>
          </div>
          <div>
            <Link href="admin/user?query=pending&firstnav=true">
              <h3>Total users</h3>
              <Suspense
                fallback={
                  <Spinner color="default" size="lg" className="spinner" />
                }
              >
                <AllUsers />
              </Suspense>
            </Link>
          </div>
        </div>
        {/* <Link href="/admin/user">All users</Link> */}
      </div>
    </>
  );
}
