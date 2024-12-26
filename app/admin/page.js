/** @format */

"use client";

import classes from "./page.module.css";
import Link from "next/link";
import AdminClientHomepage from "@/components/admin-components/admin-client-homepage";
import AdminMessageHomepage from "@/components/admin-components/admin-messages-homepage";

export default function AddProperties() {
  return (
    <>
      <title>Indigo Consulting Admin Dashboard</title>
      <div className="header">
        <h1>ADMIN DASHBOARD</h1>
        <hr />
      </div>
      <div className={classes.itemWrapper}>
        <AdminClientHomepage />
      </div>
      {/* <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Properties</h2>
          <p>Links and information related to your properties</p>
          <div className={classes.linkWrapper}>
            <Link href="/admin/properties">All properties</Link>
          </div>
        </div>
      </div> */}
      <div className={classes.itemWrapper}>
        <AdminMessageHomepage />
      </div>
      {/* <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Blogs</h2>
          <p>Links and information related to your blogs</p>
          <div className={classes.linkWrapper}></div>
        </div>
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Projects</h2>
          <p>Links and information related to your Projects</p>
          <div className={classes.linkWrapper}></div>
        </div>
      </div> */}
    </>
  );
}
