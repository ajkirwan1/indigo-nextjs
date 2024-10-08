/** @format */

"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./login-form.module.css";
export default function RegisterForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  return (
    <>
      <img className={classes.logoIndigo} src="./logoindigo.png"></img>
      <h1>Register</h1>
      <form className={classes.loginForm} action={formAction}>
        <div className={classes.formItemContainer}>
          <label>User name:</label>
          <input type="text" name="userName" />
        </div>
        <div className={classes.formItemContainer}>
          <label>Password</label>
          <input type="text" name="password" />
        </div>
        <div className={classes.formItemContainer}>
          <label>Confirm password:</label>
          <input type="text" name="passwordConfirm" />
        </div>
        <div className={classes.formItemContainer}>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>

        <div className={classes.submitButtonContainer}>
          <FormSubmit />
        </div>
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
