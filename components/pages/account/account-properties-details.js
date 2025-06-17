/** @format */

import classes from "./account-personal-details.module.css";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import VirtualizedGoogleDriveListOfFiles from "@/components/client-components/google-drive-client-file-list";
import { GetUserGoogleDriveFolderId } from "@/server/actions/db/client/get-user-google-drive-folder-id";
import { listFilesInFolder } from "@/lib/google/get-drive-files-list";

export default async function AccountPropertiesDetails({ id }) {
  try {
    const userGoogleDriveFolder = await GetUserGoogleDriveFolderId(id);

    if (
      !userGoogleDriveFolder.success ||
      !userGoogleDriveFolder.googleDriveFolderId
    ) {
      throw new Error("Google Drive folder not found.");
    }

    const googleDriveFiles = await listFilesInFolder(
      userGoogleDriveFolder.googleDriveFolderId
    );

    return (
      <div>
        <div className={classes.outerWrapper}>
          <h2>Properties</h2>
          <div className={classes.listContainer}>
            <VirtualizedGoogleDriveListOfFiles result={googleDriveFiles} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in AccountPropertiesDetails:", error);
    return <RequestFallbackReset />;
  }
}
