/** @format */
import classes from "./admin-messages-homepage.module.css";
import Link from "next/link";

export default async function AdminMessageHomepage() {
  return (
    <>
      <div className={classes.infoContainer}>
        <h2>Messages</h2>
        <p>Links and information related to your messages</p>
        <div className={classes.dataWrapper}>
          <div>
            <h3>New messages</h3>
            <span>4</span>
          </div>
          <div>
            <h3>Unread messages</h3>
            <span>1</span>
          </div>
          {/* <div className={classes.linkWrapper}></div> */}
        </div>
      </div>
    </>
  );
}
