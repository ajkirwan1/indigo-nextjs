/** @format */
"use client";

import Button from "@/components/ui/button";
import classes from "./request-fallback-reset.module.css";
import { useRouter } from "next/navigation";

export default function RequestFallbackReset({ message = "Request failed. Please try again." }) {
  const router = useRouter();

  const handleClick = () => {
    // Reload the current route
    window.location.reload();
  };

  return (
    <div className={classes.failureWrapper} role="alert">
      <p className={classes.errorMessage}>{message}</p>
      <div className="submit-button-container">
        <Button onClick={handleClick}>Try again</Button>
      </div>
    </div>
  );
}
