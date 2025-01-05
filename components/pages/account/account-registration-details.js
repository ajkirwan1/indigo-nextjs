/** @format */

import { getUser } from "@/server/actions/db/client";
import ClientRegistrationDetailsForm from "@/components/forms/account/client-registration-details-form";

import classes from "./account-registration-details.module.css";

export default async function ClientRegistrationDetails({ id }) {

  const user = await getUser(id);

  console.log(user, "USER HERE")

  return (
    <div className={classes.outerWrapper}>
      <h2>Registration information</h2>
      <ClientRegistrationDetailsForm user={user}/>
    </div>
  );
}
