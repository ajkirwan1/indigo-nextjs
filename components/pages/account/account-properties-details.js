/** @format */

import classes from "./account-personal-details.module.css";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import VirtualizedGoogleDriveListOfFiles from "@/components/client-components/google-drive-client-file-list";
import { GetUserGoogleDriveFolderId } from "@/server/actions/db/client/get-user-google-drive-folder-id";
import { listFilesInFolder } from "@/lib/google/get-drive-files-list";

export default async function AccountPropertiesDetails({ id }) {
  try {
    // Step 1: Get Google Drive Folder ID
    const { success: folderSuccess, googleDriveFolderId, errorMessage: folderError } =
      await GetUserGoogleDriveFolderId(id);

    if (!folderSuccess || !googleDriveFolderId) {
      console.error("Google Drive Folder Retrieval Failed:", folderError);
      return <RequestFallbackReset message={folderError} />;
    }

    // Step 2: Get Files from Google Drive Folder
    const { success: filesSuccess, files, errorMessage: filesError } =
      await listFilesInFolder(googleDriveFolderId);

    if (!filesSuccess) {
      console.error("Google Drive File Listing Failed:", filesError);
      return <RequestFallbackReset message={filesError} />;
    }

    // Render file list UI
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
  } catch (error) {
    console.error("Unexpected error in AccountPropertiesDetails:", error);
    return <RequestFallbackReset message="Unexpected error loading properties." />;
  }
}
