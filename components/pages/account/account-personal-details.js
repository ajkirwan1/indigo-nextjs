/** @format */

import classes from "./account-personal-details.module.css";
import ClientPersonalDetailsForm from "@/components/forms/account/client-personal-details-form";
import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { getClientDetails } from "@/server/actions/db/client/get-client-details";
import ClientAccountPersonalDetailsExpandable from "./account-personal-details-expandable";

export default async function ClientAccountPersonalDetails({ id }) {

  const result = true;

  return (
    <>
      {result?.dbFetchError ? (
        <RequestFallbackReset />
      ) : (
        <div className={classes.outerWrapper}>
          <ClientAccountPersonalDetailsExpandable id={id} result = {result}/>
        </div>
      )}
    </>
  );
}
