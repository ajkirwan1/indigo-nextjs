/** @format */

"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./contact-form.module.css";
export default function ContactForm({ action, redirection }) {
  const [state, formAction] = useFormState(action, {redirection});
  
  return (
    <>
      <h1>CONTACT</h1>
      <form className={classes.loginForm} action={formAction}>
        <div className={classes.formItemContainer}>
          <label>Full name:</label>
          <input type="text" name="fullName" />
        </div>
        <div className={classes.formItemContainer}>
          <label>Contact number inc. country code:</label>
          <input type="text" name="contactNumber" />
        </div>
        <div className={classes.formItemContainer}>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className={classes.formItemContainer}>
          <label>Message:</label>
          <textarea type="textArea" rows="10" cols="50" name="message"/>
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
