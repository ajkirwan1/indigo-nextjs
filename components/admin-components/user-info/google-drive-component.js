/** @format */

import { getFolderNameById } from "@/lib/google/get-google-folder-name-by-id";
import GoogleDriveClientComponent from "./google-drive-client-component";
import { listDriveFiles } from "@/lib/google/get-drive-files";

export default async function GoogleDriveComponent({
  classes,
  registration,
  googleDriveFolderId,
  userId
}) {
  let result;
  if (
    registration == "accepted"
  ) {
    result = await getFolderNameById(googleDriveFolderId);
    console.log(result, "RESULTY")
  } else {
    result = await listDriveFiles();
  }

  return (
    <div className={classes.text}>
      <h2>Files and Folders</h2>
      <GoogleDriveClientComponent
        result={result}
        classes={classes}
        registration={registration}
        userId={userId}
      />
    </div>
  );
}
