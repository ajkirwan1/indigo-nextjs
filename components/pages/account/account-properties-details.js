/** @format */

import classes from "./account-personal-details.module.css";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import VirtualizedGoogleDriveListOfFiles from "@/components/client-components/google-drive-client-file-list";
import { GetUserGoogleDriveFolderId } from "@/server/actions/db/client/get-user-google-drive-folder-id";
import { listFilesInFolder } from "@/lib/google/get-drive-files-list";

export default async function AccountPropertiesDetails({ id }) {
  // Step 1: Get Google Drive Folder ID
  const {
    success: folderSuccess,
    googleDriveFolderId,
    errorMessage: folderError,
    errorCode: folderErrorCode,
  } = await GetUserGoogleDriveFolderId(id);

  if (!folderSuccess || !googleDriveFolderId) {
    console.error(`[AccountPropertiesDetails] ❌ Folder retrieval failed`, {
      userId: id,
      errorCode: folderErrorCode,
      message: folderError,
    });

    return <RequestFallbackReset code={folderErrorCode} />;
  }

  // Step 2: Get Files from Google Drive Folder
  const {
    success: filesSuccess,
    files,
    errorMessage: filesError,
    errorCode: filesErrorCode,
  } = await listFilesInFolder(googleDriveFolderId);

  if (!filesSuccess) {
    console.error(`[AccountPropertiesDetails] ❌ File listing failed`, {
      folderId: googleDriveFolderId,
      errorCode: filesErrorCode,
      message: filesError,
    });

    return <RequestFallbackReset message={filesError} />;
  }

  // ✅ Render the list of files
  return (
    <div>
      <div className={classes.outerWrapper}>
        <h2>Properties</h2>
        <div className={classes.listContainer}>
          <VirtualizedGoogleDriveListOfFiles result={files} />
        </div>
      </div>
    </div>
  );
}
