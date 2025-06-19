/** @format */

import { getFolderNameById } from "@/lib/google/get-google-folder-name-by-id";
// import GoogleDriveClientComponent from "./google-drive-client-component";
import { listDriveFiles } from "@/lib/google/get-drive-files";
import GoogleDriveClientComponent from "./google-drive-components/google-drive-client-component";

export default async function GoogleDriveComponent({
  classes,
  registration,
  googleDriveFolderId,
  registrationId
}) {

  return (
    <div className={classes.text}>
      <h2>Files and Folders</h2>
      <GoogleDriveClientComponent
        googleDriveFolderId={googleDriveFolderId}
        classes={classes}
        registration={registration}
        registrationId={registrationId}
      />
    </div>
  );
}
