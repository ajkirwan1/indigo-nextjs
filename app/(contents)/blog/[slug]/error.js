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
    <div className={classes.error}>
      <h2>The news item you are trying to find cannot be found!</h2>
      {/* <p>{error.message}</p> */}
      <button onClick={() => reset()}>Try again</button>
      {/* <Button href="/" onClick={() => reset()}>Try again</Button> */}
      <div>
        <Link href="/blog">Return to list of news items</Link>
      </div>
    </div>
  );
}
