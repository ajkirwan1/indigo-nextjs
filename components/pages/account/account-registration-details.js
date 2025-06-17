/** @format */

import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import classes from "./account-registration-details.module.css";
import { GetUserRegistrationInformation } from "@/server/actions/db/admin/get-user-registration-information";
import ClientRegistrationDetailsExpandable from "@/components/forms/account/client-registration-details-expandable";

export default async function ClientRegistrationDetails({ id }) {
  const result = await GetUserRegistrationInformation(id);

  return (
    <>
      {result?.dbFetchError ? (
        <RequestFallbackReset />
      ) : (
        <div className={classes.outerWrapper}>
          <ClientRegistrationDetailsExpandable id={id} result={result}/>
        </div>
      )}
    </>
  );
}
