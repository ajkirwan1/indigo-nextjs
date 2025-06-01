/** @format */

import classes from "./account-personal-details.module.css";
import ClientPersonalDetailsForm from "@/components/forms/account/client-personal-details-form";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getProperties } from "@/server/actions/db/properties";
import { getPropertyAccessByUser } from "@/server/actions/db/admin/get-property-access";
import { getClientPdfs } from "@/server/actions/db/client/get-client-pdfs";

export default async function AccountPropertiesDetails({ id }) {
  console.log(id)
  const userPdfs = await getClientPdfs(id);
  console.log(userPdfs, "USER PDFS")

  // console.log(userPdfs, "USER PDFS");

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // const userResult = await getPropertyAccessByUser(id);

  // const result = await getProperties(id);

  // console.log(result);

  // if (!result.dbFetchError) {
  //   const { username, firstname, lastname, email, companyname, phonenumber } =
  //     user;
  // }

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
              <li key={pdf.id}>
                <h2>{pdf.name}</h2>
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
