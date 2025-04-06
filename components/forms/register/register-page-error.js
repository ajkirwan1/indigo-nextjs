/** @format */

"use client";
import classes from "./register-form.module.css";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";
import Link from "next/link";
import Button from "@/components/ui/button";
import "react-phone-input-2/lib/material.css";

export default function RegisterFormPageError({
    handleReset
}) {

  return (
    <>
      <div
        className={`${classes.formcontainer} ${classes.large}`}
      >
        <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="alt" />
      </div>
        <h2>Something went wrong!</h2>
        <p>
          We&apos;re sorry, but something went wrong submitting your details
        </p>
        <div className="submit-button-container">
          <Button onClick={handleReset}>Try again</Button>
        </div>
        <Link href="/">Return to home page</Link>
      </div>
    </>
  );
}
