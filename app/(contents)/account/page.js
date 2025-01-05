/** @format */

import { validateRequest } from "@/auth/lucia";
import classes from "./page.module.css";
import ClientAccountPersonalDetails from "@/components/pages/account/account-personal-details";
import ClientRegistrationDetails from "@/components/pages/account/account-registration-details";
import { Suspense } from "react";

export const metadata = {
  title: "Account",
  keywords: ["Account"],
  description: `Indigo consulting web apllication account page.
  Registered users can access and change their personal information.`,
};

export default async function UserInfo() {
  const { user } = await validateRequest();

  const { username, firstname, lastname, email, companyname, phonenumber, id } = user;

  console.log(user);
  return (
    <>
      <div className="header">
        <h1>Your Details</h1>
        <p>You are signed-in</p>
        <hr />
      </div>
      <div className={classes.itemWrapper}>
        <h2>You registration is currently pending</h2>
        <p>
          Once accepted, you will recieve an email, and this page will be
          updated
        </p>
      </div>
      <div className={classes.itemWrapper}>
        <ClientAccountPersonalDetails
          username={username}
          firstname={firstname}
          lastname={lastname}
          email={email}
          companyname={companyname}
          phonenumber={phonenumber}
        />
      </div>
      <div className={classes.itemWrapper}>
        <Suspense fallback={<p>Pending.....</p>}>
           <ClientRegistrationDetails id={id} />
        </Suspense>
     
      </div>
      <div className={classes.itemWrapper}>
        <h2>{firstname}</h2>
      </div>

      <div className={classes.itemWrapper}>
        <h2>Update credentials</h2>
      </div>
    </>
  );
}
