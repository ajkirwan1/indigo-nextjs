/** @format */

"use client";
import classes from "./register-form.module.css";
import userIcon from "/public/images/icons/add-user.png";
import { CheckUserCredentials } from "@/server/actions/check-user-credentials";
import Image from "next/image";
import { useState } from "react";
import RegistrationButton from "@/components/ui/buttons/registration-button";

export default function RegisterFormPage2({
  data,
  handleChange,
  handlePreviousTab,
  handleNextTab,
}) {
  const [errors, setErrors] = useState([]);

  const handleNext = async () => {
    const result = await CheckUserCredentials(
      data.firstName,
      data.lastName,
      data.companyName,
      data.phoneNumber
    );
    if (result.errors.length > 0) {
      setErrors([...result.errors])
    } else {
      handleNextTab()
    }
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image src={userIcon} alt="alt" />
        <h2>2 of 4</h2>
      </div>
      <form className={classes.registerForm1}>
        <div className={classes.formItemContainer}>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Comapany name:</label>
          <input
            type="text"
            name="companyName"
            onChange={handleChange}
            value={data.companyName}
          />
        </div>
        <div className={classes.formItemContainer}>
          <label>Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={data.phoneNumber}
          />
        </div>

        {/* <RegistrationButton
          disabled={
            !data.passwordConfirm ||
            !data.password ||
            !data.userName ||
            !data.email
              ? true
              : false
          }
        >
          Next
        </RegistrationButton> */}
      </form>
      <div className={classes.buttonWrapper}>
        <RegistrationButton onClick={handlePreviousTab}>
          Previous
        </RegistrationButton>
        <RegistrationButton onClick={handleNext}>Next</RegistrationButton>
      </div>
      {errors && (
        <ul>
          {errors.map((error) => (
            <li key={error}>
              <p>{error}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
