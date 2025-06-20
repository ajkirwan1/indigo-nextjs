/** @format */

import classes from "./page.module.css";
import ClientAccountPersonalDetails from "@/components/pages/account/account-personal-details";
import ClientRegistrationDetails from "@/components/pages/account/account-registration-details";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import AccountPropertiesDetails from "@/components/pages/account/account-properties-details";
import { auth } from "@/auth";

// Optional: Replace this with Sentry or any remote logging service
async function logServerError(message, meta) {
  console.error("[UserInfo Page Error]:", message, meta ?? {});
  // Example with Sentry:
  // Sentry.captureException(new Error(message), { extra: meta });
}

export const metadata = {
  title: "Account",
  keywords: ["Account"],
  description: `Indigo consulting web application account page.
  Registered users can access and change their personal information.`,
};

export default async function UserInfo() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      await logServerError("No user ID found in session", { session });
      throw new Error("Unauthorized access or invalid session.");
    }

    const id = parseInt(session.user.id);

    if (isNaN(id)) {
      await logServerError("Failed to parse user ID to integer", { userId: session.user.id });
      throw new Error("Invalid user ID format.");
    }

    return (
      <>
        <div className="header">
          <h1>Hi, {session.user.userName}</h1>
          <hr />
        </div>
        <div className={classes.itemWrapper}>
          {/* <Suspense fallback={<Spinner className={classes.spinner} size="lg" />}> */}
            <AccountPropertiesDetails id={id} />
          {/* </Suspense> */}
        </div>
        <div className={classes.itemWrapper}>
          <Suspense fallback={<Spinner className={classes.spinner} size="lg" />}>
            <ClientAccountPersonalDetails id={id} />
          </Suspense>
        </div>
        <div className={classes.itemWrapper}>
          <Suspense fallback={<Spinner className={classes.spinner} size="lg" />}>
            <ClientRegistrationDetails id={id} />
          </Suspense>
        </div>
        <div className={classes.itemWrapper}>
          <h2>Update password or delete account</h2>
        </div>
      </>
    );
  } catch (error) {
    await logServerError("Error rendering UserInfo page", error);
    // Optional: Return a custom fallback component instead of crashing the page
    return (
      <div className={classes.failureWrapper}>
        <p>Something went wrong while loading your account details.</p>
      </div>
    );
  }
}
