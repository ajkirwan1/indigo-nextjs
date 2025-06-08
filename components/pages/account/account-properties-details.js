/** @format */

import classes from "./account-personal-details.module.css";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getClientPdfs } from "@/server/actions/db/client/get-client-pdfs";

export default async function AccountPropertiesDetails({ id }) {
  const userPdfs = await getClientPdfs(id);
  console.log(userPdfs, "USE PDFS")

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
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* {result?.dbFetchError || userResult?.dbFetchError ? (
        <RequestFallbackReset />
      ) : userResult.propertyaccess == 0 ? (
        <>
          <div className={classes.outerWrapper}>
            <h2>Properties</h2>
          </div>
          <p>Your access to properties is pending. Please return later.</p>
        </>
      ) : userResult.propertyaccess == 1 ? (
        <>
          <div className={classes.outerWrapper}>
            <h2>Properties</h2>
          </div>
          <p>You currently do not have access to 1 property</p>
        </>
      ) : (
        <>
          <div className={classes.outerWrapper}>
            <h2>Properties</h2>
          </div>
          <p>
            You currently do not have access to {userResult.propertyaccess}
            properties
          </p>
        </>
      )} */}
    </>
  );
}
