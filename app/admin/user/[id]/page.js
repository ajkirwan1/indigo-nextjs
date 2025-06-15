/** @format */

import AccordionPersonal from "@/components/surfaces/accordian";
import GoogleDriveComponent from "@/components/admin-components/user-info/google-drive-component";
import { getUser } from "@/server/actions/db/client";
import classes from "./page.module.css";

export default async function AdminClientPage({ params }) {
  const userId = params.id
  const userInfo = await getUser(parseInt(userId));
  console.log(userInfo, "USEINFO")

  const { registration, googleDriveFolderId } = userInfo;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.subHeader}>
        <h1>CLIENT DETAILS</h1>
      </div>
      <AccordionPersonal userInfo={userInfo} />
      <GoogleDriveComponent
        classes={classes}
        registration={registration}
        googleDriveFolderId={googleDriveFolderId}
        userId={userId}
      />
    </div>
  );
}
