/** @format */

"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./formsubmit";
import classes from "./contact-form.module.css";
import Image from "next/image";
import contactIcon from "/public/images/icons/envelope.png";
export default function ContactForm({ action, redirection }) {
  const [state, formAction] = useFormState(action, { redirection });

  return (
    <>
      <h2>MESSAGE</h2>
      <Image alt="icon" src={contactIcon} className={classes.contactIcon} />
      <form className={classes.loginForm} action={formAction}>
        <div className={classes.formItemContainer}>
          <input type="text" name="firstName" placeholder="First name" />
          {state.errors?.find((item) => item.errorType == "firstName") && <p>Invalid first name</p>}
        </div>
        <div className={classes.formItemContainer}>
          <input type="text" name="lastName" placeholder="Last name" />
          {state.errors?.find((item) => item.errorType == "lastName") && <p>Invalid last name</p>}
        </div>
        <div className={`${classes.formItemContainer}`}>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact number"
          />
          {state.errors?.find((item) => item.errorType == "contactNumber") && <p>Invalid contact number</p>}
        </div>
        <div className={classes.formItemContainer}>
          <input type="email" name="email" placeholder="Email" />
          {state.errors?.find((item) => item.errorType == "email") && <p>Invalid email address number</p>}
        </div>
        <div className={`${classes.formItemContainer} ${classes.input}`}>
          <textarea
            type="textArea"
            rows="5"
            cols="50"
            name="message"
            placeholder="Message"
          />
           {state.errors?.find((item) => item.errorType == "message") && <p>Invalid message</p>}
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
