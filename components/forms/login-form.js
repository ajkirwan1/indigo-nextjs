/** @format */

"use client";
import { useFormState } from "react-dom";
import indigoLogo from "/public/Indigo_Logo_Transparent.png";
import FormSubmit from "./formsubmit";
import classes from "./login-form.module.css";
import Image from "next/image";
export default function LoginForm({ action, redirection }) {
  const [state, formAction] = useFormState(action, { redirection });

  return (
    <>
      <Image
        className={classes.logoIndigo}
        src={indigoLogo}
        alt="An image displayinging the logo for Indigo"
      />
      <h1>Login</h1>
      <form className={classes.loginForm} action={formAction}>
        <div className={classes.formItemContainer}>
          <label>User name:</label>
          <input type="text" name="username" />
        </div>
        <div className={classes.formItemContainer}>
          <label>Password:</label>
          <input type="text" name="password" />
        </div>
        <div className={classes.submitButtonContainer}>
          <FormSubmit />
        </div>
        {/* {state.errors && (
          <ul>
            {state.errors.map((error) => (
              <li key={error}>
                <p>{error}</p>
              </li>
            ))}
          </ul>
        )} */}
      </form>
    </>
  );
}
