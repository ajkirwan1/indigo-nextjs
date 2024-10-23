/** @format */

"use client";
import indigoLogo from "/public/Indigo_Logo_Transparent.png";
import { useFormState } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./login-form.module.css";
import Image from "next/image";

export default function LogoutForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  return (
    <>
      <Image
        className={classes.logoIndigo}
        src={indigoLogo}
        alt="An image displayinging the logo for Indigo"
      />
      <h1>Logout</h1>
      <form className={classes.loginForm} action={formAction}>
        <div className={classes.submitButtonContainer}>
          <FormSubmit />
        </div>
      </form>
    </>
  );
}
