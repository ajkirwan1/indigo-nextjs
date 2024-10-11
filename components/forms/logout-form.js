/** @format */

"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./login-form.module.css";
export default function LogoutForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  return (
    <>
      <img className={classes.logoIndigo} src="./logoindigo.png"></img>
      <h1>Logout</h1>
      <form className={classes.loginForm} action={formAction}>
        <div className={classes.submitButtonContainer}>
          <FormSubmit />
        </div>
      </form>
    </>
  );
}
