/** @format */

import classes from "./account-personal-details.module.css";
import ClientPersonalDetailsForm from "@/components/forms/account/client-personal-details-form";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getClientDetails } from "@/server/actions/db/client/get-client-details";

export default async function ClientAccountPersonalDetails({ id }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // const clientDetails = 

  // console.log(clientDetails, "RESULT")

  // if (!result.dbFetchError) {
  //   const { username, firstname, lastname, email, companyname, phonenumber } =
  //     user;
  // }

  return (
    <>
      {/* {result?.dbFetchError ? (
        <RequestFallbackReset />
      ) : (
        <div className={classes.outerWrapper}>
          <h2>Personal details</h2>
          <ClientPersonalDetailsForm
            username={result.username}
            firstname={result.firstname}
            lastname={result.lastname}
            email={result.email}
            companyname={result.companyname}
            phonenumber={result.phonenumber}
            id={id}
          />
        </div>
      )} */}
    </>
  );
}
