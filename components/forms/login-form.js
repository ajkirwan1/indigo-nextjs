/** @format */

"use client";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./login-form.module.css";
import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";
export default function LoginForm({ action, redirection, pending }) {
  const [state, formAction] = useFormState(action, { redirection });

  return (
    <>
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
        {/* {loading ? (
          <div className={classes.spinner}>
            <Spinner color="secondary" size="lg" />
          </div>
        ) : null} */}

        {state.errors && (
          <ul>
            {state.errors.map((error) => (
              <li key={error}>
                <p>{error}</p>
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
