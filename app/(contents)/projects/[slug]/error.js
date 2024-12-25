/** @format */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-boundary">
      <h2>Something went wrong finding the project item!</h2>
      <p>{error.message}</p>
      <div className="submit-button-container">
        <Button href="/" onClick={() => reset()}>
          Try again
        </Button>
      </div>
      <div>
        <Link href="/">Return to homepage</Link>
      </div>
    </div>
  );
}
