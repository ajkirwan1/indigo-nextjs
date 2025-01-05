/** @format */
'use client'

import classes from "./account-personal-details.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";
import FormSubmit from "@/components/forms/formsubmit";
import Link from "next/link";

import { Suspense } from "react";

import { Spinner } from "@nextui-org/spinner";


export default function ClientAccountPersonalDetails({ username, firstname, lastname, email }) {
  // const [state, formAction] = useFormState(action, initialState, {
  //   redirection,
  // });

  return (
    <>
    <h2>Personal details</h2>
      {/* <form className={classes.loginForm} action={formAction}> */}
      <form className={classes.personalDetailsForm}>
        <div className={classes.formItemContainer}>
          <label>User name:</label>
          <input type="text" name="username" value={username} />
        </div>
        <div className={classes.formItemContainer}>
          <label>First name:</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            // onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Last name:</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            // onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            // onChange={handleChange}
          />
        </div>
        <div
        // className={
        //   // isButtonDisabled
        //   false
        //     ? `${classes.submitButtonContainer} ${classes.submitButtonContainerClosed}`
        //     : `${classes.submitButtonContainer}`
        // }
        >
          {/* <FormSubmit
            disabled={false}
            disabled={isButtonDisabled}
          /> */}
        </div>
      </form>
    </>
  );
}
