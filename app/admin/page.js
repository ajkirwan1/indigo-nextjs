/** @format */

"use client";

import classes from "./page.module.css";
import Link from "next/link";

export default function AddProperties() {
  return (
    <>
      <div className={classes.subHeader}>
        <h1>Admin Dashboard</h1>
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Clients</h2>
          <p>Links and information related to clients who have registered</p>
          <div className={classes.linkWrapper}>
            <Link href="/admin/user">All clients</Link>
          </div>
        </div>
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Properties</h2>
          <p>Links and information related to your properties</p>
          <div className={classes.linkWrapper}>
            <Link href="/admin/properties">All properties</Link>
          </div>
        </div>
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.infoContainer}>
          <h2>Messages</h2>
          <p>Links and information related to your messages</p>
          <div className={classes.linkWrapper}></div>
        </div>
      </div>
      <div className={classes.itemWrapper}>
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
      </div>
    </>
  );
}
