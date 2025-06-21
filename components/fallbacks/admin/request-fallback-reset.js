/** @format */
"use client";

import classes from "./request-fallback-reset.module.css";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

// Map known error codes to user-friendly messages
const errorMessageMapper = {
  NO_DRIVE_ACCESS: "You currently do not have access to any documents.",
  USER_NOT_FOUND: "The user account was not found.",
  NETWORK_ERROR: "A network issue occurred. Please try again.",
  DEFAULT: "Request failed. Please try again.",
  DB_FETCH_ERROR: "A database error occured. Please try again"
};

export default function RequestFallbackReset({
  code = "DEFAULT", // error code from the server or logic
  message = "",     // fallback message if code not mapped
}) {
  const router = useRouter();

  const displayMessage =
    errorMessageMapper[code] || message || errorMessageMapper.DEFAULT;

  const showRetryButton = code === "DEFAULT" || code === "DB_FETCH_ERROR" || code === "NETWORK_ERROR";
  const showRequestAccessButton = code === "NO_DRIVE_ACCESS";

  const handleRetry = () => {
    router.refresh(); // or use: window.location.reload();
  };

  const handleRequestAccess = () => {
    // Replace with real logic for requesting access (e.g. open form, send API call)
    alert("Request access submitted!");
  };

  return (
    <div className={classes.failureWrapper} role="alert">
      <p className={classes.errorMessage}>{displayMessage}</p>

      {showRetryButton && (
        <div className="submit-button-container">
          <Button className={classes.retryButton} onClick={handleRetry}>
            Try again
          </Button>
        </div>
      )}

      {showRequestAccessButton && (
        <div className="submit-button-container">
          <Button className={classes.retryButton} onClick={handleRequestAccess}>
            Request access
          </Button>
        </div>
      )}
    </div>
  );
}
