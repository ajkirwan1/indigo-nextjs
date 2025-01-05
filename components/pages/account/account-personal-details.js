/** @format */
"use client";

import classes from "./account-personal-details.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";
import ValidatePersonalDetails from "@/utils/validate-personal-details";
import SubmitButton from "@/components/ui/buttons/submit-button";
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
  const [errors, setErrors] = useState([]);


  const handleChange = (event) => {
    const { name, value } = event.target;

    if (formDisabled) {
      setData({
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
      });
      setErrors([{disabledError: true}]);
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleEnable = () => {
    setFormDisabled(false);
    setErrors([{disabledError: false}]);
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

  const handleSubmit = () => {
    const result = ValidatePersonalDetails(data);
    console.log(result);
    // if (result.errors) {
    //   console.log(result.errors);
    //   setErrors([...result.errors]);
    // }
  };

  return (
    <div className={classes.outerWrapper}>
      <h2>Personal details</h2>
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
        {errors[0]?.disabledError ? (
          <p>
            Form is disbaled for editting. To update you details, please click
            enable
          </p>
        ) : null}
        {formDisabled ? (
          <div className="submit-button-container">
            <Button onClick={handleEnable}>Enable update</Button>
          </div>
        ) : (
          <div className={classes.doubleButtonWrapper}>
            <div className="submit-button-container">
              <Button onClick={handleReset}>Reset</Button>
            </div>
            <div className="submit-button-container">
              <Button onClick={handleSubmit}>Update</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
