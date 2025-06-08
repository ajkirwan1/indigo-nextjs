/** @format */

import classes from "./account-personal-details.module.css";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getClientPdfs } from "@/server/actions/db/client/get-client-pdfs";
import LinkButton from "@/components/ui/buttons/link-button/link-button";

export default async function AccountPropertiesDetails({ id }) {
  const userPdfs = await getClientPdfs(id);

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
        </div>
      )}
    </>
  );
}
