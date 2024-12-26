/** @format */
import classes from "./admin-client-homepage.module.css";
import Link from "next/link";

export default async function AdminClientHomepage() {
  return (
    <>
      <div className={classes.infoContainer}>
        <h2>Client Data</h2>
        <p>Links and information related to clients who have registered</p>
        <div className={classes.dataWrapper}>
          <div>
            <h3>Recently joined</h3>
            <span>0</span>
          </div>
          <div>
            <h3>Pending registration</h3>
            <span>5</span>
          </div>
          <div >
            <h3>Total number of clients</h3>
            <span>65</span>
          </div>
        </div>
      </div>
    </>
  );
}
