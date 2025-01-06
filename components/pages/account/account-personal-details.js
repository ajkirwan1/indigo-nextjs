/** @format */

import classes from "./account-personal-details.module.css";
import ClientPersonalDetailsForm from "@/components/forms/account/client-personal-details-form";
import { getUser } from "@/server/actions/db/client";

export default async function ClientAccountPersonalDetails({ id }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const user = await getUser(id);

  const { username, firstname, lastname, email, companyname, phonenumber } =
    user;

  return (
    <div className={classes.outerWrapper}>
      <h2>Personal details</h2>
      <ClientPersonalDetailsForm
        username={username}
        firstname={firstname}
        lastname={lastname}
        email={email}
        companyname={companyname}
        phonenumber={phonenumber}
        id={id}
      />
    </div>
  );
}
