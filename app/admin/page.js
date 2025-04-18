/** @format */

import classes from "./page.module.css";
import AdminClientHomepage from "@/components/admin-components/admin-client-homepage";

export default function AddProperties() {
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
