/** @format */

import { getFolderNameById } from "@/lib/google/get-google-folder-name-by-id";
import GoogleDriveClientComponent from "./google-drive-client-component";
import { listDriveFiles } from "@/lib/google/get-drive-files";

export default async function GoogleDriveComponent({
  classes,
  registration,
  googleDriveFolderId,
}) {
  let result;
  if (
    // registration == "accepted"
    false
  ) {
    result = await getFolderNameById(googleDriveFolderId);
  } else {
    result = await listDriveFiles();
  }

  return (
    <div className={classes.text}>
      <GoogleDriveClientComponent
        result={result}
        classes={classes}
        registration={registration}
      />
    </div>
  );
}
