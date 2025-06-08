/** @format */

import classes from "./account-personal-details.module.css";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getClientPdfs } from "@/server/actions/db/client/get-client-pdfs";
import LinkButton from "@/components/ui/buttons/link-button/link-button";
import { listDriveFiles } from "@/lib/google/get-drive-files";
import PdfExtractor from "@/components/pdfs/pdf-extractor";

export default async function AccountPropertiesDetails({ id }) {
  const userPdfs = await getClientPdfs(id);

  const googleDriveFiles = await listDriveFiles();

  console.log(googleDriveFiles, "GOOGLEDRIVEFILWS");

  return (
    <>
      {userPdfs.dbFetchError ? (
        <RequestFallbackReset />
      ) : (
        <div>
          <div className={classes.outerWrapper}>
            <h2>Properties</h2>
          </div>
          <ul>
            {userPdfs.map((pdf) => (
              <li key={pdf.id} className={classes.listItem}>
                <p>{pdf.name}</p>
                {/* <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a> */}
                <div className="submit-button-container">
                  <LinkButton location={pdf.url}>View PDF</LinkButton>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="/api/download?fileId=1WgCRKQNmWBBTqcfCrtmFzmYX667PG845"
            download
          >
            Download PDF
          </a>
        </div>
      )}
    </>
  );
}
