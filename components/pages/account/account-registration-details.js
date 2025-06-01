/** @format */

import { getUser } from "@/server/actions/db/client";

import ClientRegistrationDetailsForm from "@/components/forms/account/client-registration-details-form";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { UpdateUserAccountRegisrationInfo } from "@/server/actions/db/account-registration-update";
import classes from "./account-registration-details.module.css";

import { GetUserRegistrationInformation } from "@/server/actions/db/admin/get-user-registration-information";

export default async function ClientRegistrationDetails({ id }) {
  const result = await GetUserRegistrationInformation(id);
  console.log(result, "registration details")

  return (
    <>
      {result?.dbFetchError ? (
        <RequestFallbackReset />
      ) : (
        <div className={classes.outerWrapper}>
          <h2>Registration information</h2>
          <ClientRegistrationDetailsForm
            id={id}
            clientInfo={result}
            action={UpdateUserAccountRegisrationInfo}
          />
        </div>
      )}
    </>
  );
}
