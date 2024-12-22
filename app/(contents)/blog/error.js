/** @format */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import classes from "./page.module.css";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={classes.error}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
      <div>
        <Link href="/">Return to homepage</Link>
      </div>
    </div>
  );
}
