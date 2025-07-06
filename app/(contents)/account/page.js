/** @format */

import classes from "./page.module.css";
import ClientAccountPersonalDetails from "@/components/pages/account/account-personal-details";
import ClientRegistrationDetails from "@/components/pages/account/account-registration-details";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import AccountPropertiesDetails from "@/components/pages/account/account-properties-details";
import { auth } from "@/auth";
import {
  Typography,
  Box,
  Container
} from '@mui/material';
import DeleteAccountDialog from "@/components/pages/account/delete-personal-account";
import ResetPasswordDialog from "@/components/pages/account/update-password";

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
  const session = await auth();

  if (!session?.user?.id) {
    logServerError("No user ID found in session", { session });
    redirect("/");
  }

  const id = parseInt(session.user.id, 10);

  if (isNaN(id)) {
    logServerError("Failed to parse user ID to integer", { userId: session.user.id });
    redirect("/");
  }

  return (
    <>
      <div className="header">
        <h1>Hi, {session.user.userName}</h1>
        <hr />
      </div>
      <div className={classes.itemWrapper}>
      <Container maxWidth={false} sx={{ width: "100%", py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="h5">
          Files
        </Typography>
      </Box>
      <AccountPropertiesDetails id={id} />
      </Container>
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
      <Container maxWidth={false} sx={{ width: "100%", py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="h5">
          Registration Information
        </Typography>
        </Box>
        <Box       display="flex"
      justifyContent="center"
      alignItems="center"
      gap="2vw"
      sx={{ mt: 4 }} // optional top margin
      >
      <DeleteAccountDialog userId={id}/>
      <ResetPasswordDialog />
    </Box>
      </Container>
      </div>
    </>
  );
}
