/** @format */

import classes from "./page.module.css";
import AdminClientHomepage from "@/components/admin-components/admin-client-homepage";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AddProperties() {

  const session = await auth();

  // Redirect if session is missing or the user is not an admin

  if (!session || session.user?.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      <div className="header">
        <h1>ADMIN DASHBOARD</h1>
        <hr />
      </div>
      <div className={classes.itemWrapper}>
        <AdminClientHomepage />
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Properties/Projects/News</h2>
          <p>A link to update properties, projects, and news items</p>
          <div className={classes.linkWrapper}>
            <a href="https://www.contentful.com">Contentful</a>
          </div>
        </div>
      </div>
    </>
  );
}
