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
  const [errors, setErrors] = useState({});

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
      setErrors({ formDisabled: true });
      console.log("DISABLED");
    }
  };

  return (
    <>
      <h2>Personal details</h2>
      {/* <form className={classes.loginForm} action={formAction}> */}
      <form className={classes.personalDetailsForm}>
        <div className={classes.formItemContainer}>
          <label>User name:</label>
          <input
            type="text"
            name="username"
            placeholder={username}
            value={data.userName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>First name:</label>
          <input
            type="text"
            name="firstname"
            placeholder={firstname}
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Last name:</label>
          <input
            type="text"
            name="lastname"
            placeholder={lastname}
            value={data.lastName}
            disabled
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
      <div>
        <p>
          Form is disbaled for editting. To update you details, please click
          enable
        </p>
        <div className="submit-button-container">
          <Button>Enable update</Button>
        </div>
      </div>
    </>
  );
}
