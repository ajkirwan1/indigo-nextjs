/** @format */

"use client";
import classes from "./register-form.module.css";
import { CheckUserAction } from "@/server/actions/check-user-action";
import { useState } from "react";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function RegisterFormPage1({
  data,
  handleChange,
  handleNextTab,
}) {
  const [errors, setErrors] = useState([]);
  // console.warn(errors);

  const handleNext = async () => {
    const result = await CheckUserAction(
      data.userName,
      data.email,
      data.password,
      data.passwordConfirm
    );

    if (result?.errors) {
      setErrors([...result.errors]);
    } else if (result?.dbErrorMessage) {
      setErrors([{ ...result }]);
      // console.log(errors[0]);
    } else {
      handleNextTab();
    }

    // (result.errors.length > 0) {
    //   setErrors([...result.errors]);
    // } else {

    // }
  };

  const handleReset = () => {
    setErrors([]);
  };

  return (
    <>
      {errors[0]?.dbErrorMessage ? (
        <>
          <div className={classes.headerContainer}>
            <h1>REGISTER</h1>
            <Image className={classes.iconRegister} src={userIcon} alt="alt" />
            <h2>1/4</h2>
            <p>{errors[0].dbErrorMessage}</p>
            <div className={classes.submitButtonContainer}>
              <Button onClick={handleReset}>Try again</Button>
            </div>
            <Link href="/">Return to homepage</Link>
          </div>
        </>
      ) : (
        <>
          <div className={classes.headerContainer}>
            <h1>REGISTER</h1>
            <Image className={classes.iconRegister} src={userIcon} alt="alt" />
            <h2>1/4</h2>
          </div>
          <form className={classes.registerForm1}>
            <div className={`${classes.formItemContainer} ${classes.ItemA}`}>
              <label>User name:</label>
              <input
                type="text"
                name="userName"
                placeholder="User name"
                value={data.userName}
                onChange={handleChange}
              />
            </div>
            {errors?.find((item) => item.errorType == "username") ? (
              <p className={classes.errorA}>Invalid user name</p>
            ) : errors?.find((item) => item.errorType == "usernameExists") ? (
              <p className={classes.errorA}>Username already exists</p>
            ) : null}
            <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="email@123.com"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            {errors?.find((item) => item.errorType == "email") ? (
              <p className={classes.errorB}>Invalid email</p>
            ) : errors?.find((item) => item.errorType == "emailExists") ? (
              <p className={classes.errorB}>Email already exists</p>
            ) : null}
            <div className={`${classes.formItemContainer} ${classes.ItemC}`}>
              <label>Password:</label>
              <input
                type="text"
                name="password"
                placeholder="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            {errors?.find((item) => item.errorType == "password") ? (
              <p className={classes.errorC}>Invalid password</p>
            ) : null}
            <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
              <label>Confirm password:</label>
              <input
                type="text"
                name="passwordConfirm"
                placeholder="confirm password"
                value={data.passwordConfirm}
                onChange={handleChange}
              />
            </div>
            {errors?.find((item) => item.errorType == "passwordConfirm") ? (
              <p className={classes.errorD}>Passwords must match</p>
            ) : null}
            {/* <div className={classes.buttonContainer}></div> */}
          </form>
          <div className={classes.buttonWrapper}>
            <RegistrationButton
              disabled={
                !data.passwordConfirm ||
                !data.password ||
                !data.userName ||
                !data.email
                  ? true
                  : false
              }
              onClick={handleNext}
            >
              Next
            </RegistrationButton>
          </div>
        </>
      )}
    </>
  );
}
