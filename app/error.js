/** @format */
"use client";
import Link from "next/link";
import { useEffect } from "react";
import HeroComponent from "@/components/hero/hero-component";
import classes from "./page.module.css";
import heroImage from "/public/images/croppednight.jpg";
import Button from "@/components/ui/button";

import "./globals.css";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <div className={classes.pageWrapper}>
        <HeroComponent heroImage={heroImage} altText="Alt text" header footer>
          <div className={classes.formcontainer}>
            <h1>Something went wrong!</h1>
            <div>
              <Link href="/">Return to homepage</Link>
            </div>
            <div className="error-button-container">
              <Button onClick={() => reset()}>
                <p>Try again</p>
              </Button>
            </div>
          </div>
        </HeroComponent>
      </div>
    </>
  );
}
