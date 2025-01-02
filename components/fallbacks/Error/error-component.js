/** @format */

"use client"; // Error boundaries must be Client Components

import classes from "./error-component.module.css";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function ErrorComponent({ error, reset }) {
  return (
    <div className={classes.error}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <div className="error-button-container">
        <Button onClick={() => reset()}>
          <p>Try again</p>
        </Button>
      </div>
      <div>
        <Link href="/">Return to homepage</Link>
      </div>
    </div>
  );
}
