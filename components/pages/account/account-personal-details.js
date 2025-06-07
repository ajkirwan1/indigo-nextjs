/** @format */

import classes from "./account-personal-details.module.css";

import RequestFallbackReset from "@/components/fallbacks/admin/request-fallback-reset";
import { GetClientDetails } from "@/server/actions/db/client/get-client-details";
import ClientAccountPersonalDetailsExpandable from "./account-personal-details-expandable";

export default async function ClientAccountPersonalDetails({ id }) {

  const result = await GetClientDetails(id);

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
