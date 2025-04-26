/** @format */

import { redirect } from 'next/navigation'
import classes from "./page.module.css";
import ClientAccountPersonalDetails from "@/components/pages/account/account-personal-details";
import ClientRegistrationDetails from "@/components/pages/account/account-registration-details";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import AccountPropertiesDetails from "@/components/pages/account/account-properties-details";
import Overlay from "@/components/overlay";
import ModalBackdrop from "@/components/modal-backdrop";
import { auth } from "@/auth";

export const metadata = {
  title: "Account",
  keywords: ["Account"],
  description: `Indigo consulting web apllication account page.
  Registered users can access and change their personal information.`,
};

export default async function UserInfo(props) {
  const session = await auth();
  console.log(session, "SESION ACCOUNT PAGE");

  // if (session.user.role == "admin") {
  //   redirect("/admin")
  // }

  // const searchParams = await props.searchParams;

  // let initial = searchParams?.initial || "";

  // const { user } = await validateRequest();

  // const { id } = user;

  return (
    <>
      <div className="header">
        <h1>Your Details</h1>
        <p>You are signed-in</p>
        <hr />
      </div>
      <div className={classes.itemWrapper}>
        <Suspense fallback={<Spinner className={classes.spinner} size="lg" />}>
          {/* <AccountPropertiesDetails id={id} /> */}
        </Suspense>
      </div>
      <div className={classes.itemWrapper}>
        <Suspense fallback={<Spinner className={classes.spinner} size="lg" />}>
          {/* <ClientAccountPersonalDetails id={id} /> */}
        </Suspense>
      </div>
      <div className={classes.itemWrapper}>
        <Suspense fallback={<Spinner className={classes.spinner} size="lg" />}>
          {/* <ClientRegistrationDetails id={id} /> */}
        </Suspense>
      </div>
      <div className={classes.itemWrapper}>
        <h2>Update password or delete account</h2>
      </div>
    </>
  );
}