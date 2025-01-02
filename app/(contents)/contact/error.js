/** @format */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import Button from "@/components/ui/button";
import ErrorComponent from "@/components/fallbacks/Error/error-component";



export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // <div className={classes.error}>
    //   <h2>Something went wrong!</h2>
    //   <p>{error.message}</p>
    //   <Button onClick={() => reset()}>Try again</Button>
    //   <div>
    //     <Link href="/">Return to homepage</Link>
    //   </div>
    // </div>
    <>
    <ErrorComponent error={error} reset={reset} />
    </>
  );
}
