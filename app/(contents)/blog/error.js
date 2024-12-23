/** @format */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={classes.error}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
      <div>
        <Link href="/">Return to homepage</Link>
        <Button>Return to homepage</Button>
      </div>
    </div>
  );
}
