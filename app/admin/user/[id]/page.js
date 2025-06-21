/** @format */

import AccordionPersonal from "@/components/surfaces/accordian";
import GoogleDriveComponent from "@/components/admin-components/user-info/google-drive-component";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getUser } from "@/server/actions/db/client";
import classes from "./page.module.css";

export default async function AdminClientPage({ params }) {
  const registrationId = params.id;
  const userInfo = await getUser(parseInt(registrationId, 10));

  const isError = userInfo?.success === false;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.subHeader}>
        <h1>CLIENT DETAILS</h1>
      </div>

      {isError ? (
        <RequestFallbackReset
          code={userInfo.errorCode}
          message={userInfo.errorMessage}
        />
      ) : (
        <>
          <AccordionPersonal userInfo={userInfo} />
          <GoogleDriveComponent
            classes={classes}
            registration={userInfo.registration}
            googleDriveFolderId={userInfo.googleDriveFolderId}
            registrationId={registrationId}
          />
        </>
      )}
    </div>
  );
}
