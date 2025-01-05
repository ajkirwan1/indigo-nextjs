/** @format */
"use client";

import classes from "./account-personal-details.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";
import FormSubmit from "@/components/forms/formsubmit";
import Link from "next/link";

import { Suspense } from "react";

import { Spinner } from "@nextui-org/spinner";

import Button from "@/components/ui/button";

export default function ClientAccountPersonalDetails({
  username,
  firstname,
  lastname,
  email,
}) {
  const [data, setData] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const [formDisabled, setFormDisabled] = useState(true);
  const [errors, setErrors] = useState(false);

  // const [state, formAction] = useFormState(action, initialState, {
  //   redirection,
  // });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (formDisabled) {
      setData({
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
      });
      setErrors(true);
      console.log("DISABLED");
    } else {
      console.log(name);
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleEnable = () => {
    setFormDisabled(false);
    setErrors(false);
  };


  const handleReset = () => {
    setData({
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
    });
    setFormDisabled(true);

  };


  return (
    <>
      <h2>Personal details</h2>
      {/* <form className={classes.loginForm} action={formAction}> */}
      <form
        className={
          formDisabled
            ? `${classes.personalDetailsForm}`
            : `${classes.personalDetailsForm} ${classes.enabled}`
        }
      >
        <div className={classes.formItemContainer}>
          <label>User name:</label>
          <input
            type="text"
            name="userName"
            placeholder={username}
            value={data.userName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            placeholder={firstname}
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Last name:</label>
          <input
            // className={classes.enabled}
            type="text"
            name="lastName"
            placeholder={lastname}
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder={email}
            value={data.email}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className={classes.buttonWrapper}>
        {errors ? (
          <p>
            Form is disbaled for editting. To update you details, please click
            enable
          </p>
        ) : null}
        <div className="submit-button-container">
          {formDisabled ? (
            <Button onClick={handleEnable}>Enable update</Button>
          ) : (
            <Button onClick={handleReset}>Reset</Button>
          )}
        </div>
      </div>
    </>
  );
}
