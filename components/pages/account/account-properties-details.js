/** @format */

import classes from "./account-personal-details.module.css";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
// import { getClientPdfs } from "@/server/actions/db/client/get-client-pdfs";
import LinkButton from "@/components/ui/buttons/link-button/link-button";
import { listDriveFiles } from "@/lib/google/get-drive-files";
import { listFilesInFolder } from "@/lib/google/get-drive-files-list";
// import PdfExtractor from "@/components/pdfs/pdf-extractor";
import VirtualizedGoogleDriveListOfFiles from "@/components/client-components/google-drive-client-file-list";

export default async function AccountPropertiesDetails({ id }) {
  // const userPdfs = await getClientPdfs(id);

  const googleDriveFiles = await listFilesInFolder("1-S8rsd9Ctz6HOCDmK87POwwlTJbrDmMh");

  console.log(googleDriveFiles, "GOOGLEDRIVEFILWS");

  return (
    // <>
    //   {userPdfs.dbFetchError ? (
    //     <RequestFallbackReset />
    //   ) : (
    //     <div>
    //       <div className={classes.outerWrapper}>
    //         <h2>Properties</h2>
    //       </div>
    //       <a
    //         href="/api/download?fileId=1WgCRKQNmWBBTqcfCrtmFzmYX667PG845"
    //         download
    //       >
    //         Download PDF
    //       </a>
    //     </div>
    //   )}
    // </>
    <>
      <div>
        <div className={classes.outerWrapper}>
          <h2>Properties</h2>
          <div className={classes.listContainer}>
            <VirtualizedGoogleDriveListOfFiles result={googleDriveFiles} />
          </div>
        </div>
      </div>
    </>
  );
}
