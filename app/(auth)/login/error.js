/** @format */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import classes from "./page.module.css";
import HeroComponent from "@/components/hero/hero-component";
import heroImage from "/public/images/croppednight.jpg";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
            <h1>A login error occured!</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
            <div>
              <Link href="/">Return to homepage</Link>
              <Button>Return to homepage</Button>
            </div>
          </div>
        </HeroComponent>
      </div>
    </>
  );
}
