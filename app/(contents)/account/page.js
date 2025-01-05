/** @format */

import { validateRequest } from "@/auth/lucia";
import classes from "./page.module.css";
import ClientAccountPersonalDetails from "@/components/pages/account/account-personal-details";

export const metadata = {
  title: "Account",
  keywords: ["Account"],
  description: `Indigo consulting web apllication account page.
  Registered users can access and change their personal information.`,
};

export default async function UserInfo() {
  const { user } = await validateRequest();

  const { username, firstname, lastname, email } = user;

  console.log(user);
  return (
    <>
      <div className="header">
        <h1>Your Details</h1>
        <p>You are signed-in</p>
        <hr />
      </div>
      <div className={classes.itemWrapper}>
        <ClientAccountPersonalDetails
          username={username}
          firstname={firstname}
          lastname={lastname}
          email={email}
        />
      </div>
      <div className={classes.itemWrapper}>
        <h2>{username}</h2>
      </div>
      <div className={classes.itemWrapper}>
        <h2>{firstname}</h2>
      </div>

      <div className={classes.itemWrapper}>
        <h2>Update credentials</h2>
      </div>
      <div className={classes.itemWrapper}>
        <h2>Properties to view</h2>
      </div>
    </>
  );
}
