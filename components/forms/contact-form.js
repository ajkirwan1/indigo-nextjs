/** @format */

"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./contact-form.module.css";
import Image from "next/image";
import contactIcon from "/public/images/contact.png";
export default function ContactForm({ action, redirection }) {
  const [state, formAction] = useFormState(action, { redirection });

  return (
    <>
      <h1>CONTACT</h1>
      <Image alt="icon" src={contactIcon} className={classes.contactIcon} />
      <form className={classes.loginForm} action={formAction}>
        <div className={classes.formItemContainer}>
          <input type="text" name="firstName" placeholder="First name" />
        </div>
        <div className={classes.formItemContainer}>
          <input type="text" name="lastName" placeholder="Last name" />
        </div>
        <div className={classes.formItemContainer}>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact number"
          />
        </div>
        <div className={classes.formItemContainer}>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className={classes.formItemContainer}>
          {/* <label>Message:</label> */}
          <textarea
            type="textArea"
            rows="10"
            cols="50"
            name="message"
            placeholder="Message…"
          />
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
