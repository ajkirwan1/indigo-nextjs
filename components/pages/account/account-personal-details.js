/** @format */

import classes from "./account-personal-details.module.css";
import ClientPersonalDetailsForm from "@/components/forms/account/client-personal-details-form";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getUser } from "@/server/actions/db/client";

export default async function ClientAccountPersonalDetails({ id }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = await getUser(id);

  // if (!result.dbFetchError) {
  //   const { username, firstname, lastname, email, companyname, phonenumber } =
  //     user;
  // }

  return (
    <>
      {result?.dbFetchError ? (
        <RequestFallbackReset />
      ) : (
        <div className={classes.outerWrapper}>
          <h2>Personal details</h2>
          <ClientPersonalDetailsForm
            username={user.username}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            companyname={user.companyname}
            phonenumber={user.phonenumber}
            id={id}
          />
        </div>
      )}
    </>
  );
}
