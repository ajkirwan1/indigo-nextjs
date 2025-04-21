/** @format */

"use client";
import classes from "./register-form.module.css";
import { NewUserSignUp } from "@/server/actions/registration/new-user-signup";
import { useState } from "react";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useFormState } from "react-dom";
import FormSubmit from "../formsubmit";

export default function RegisterFormPage1() {
  const initialState = { errorMessage: "", errors: [] };
  const [errors, setErrors] = useState([]);
  const [state, formAction] = useFormState(NewUserSignUp, initialState);

  const handleReset = () => {
    setErrors([]);
  };

  // const handleSubmit = () => {
  //   console.log("KLKL");
  // };

  console.log(state);
  return (
    <>
      {errors[0]?.dbErrorMessage ? (
        <>
          <div className={classes.headerContainer}>
            <h1>REGISTER</h1>
            <Image className={classes.iconRegister} src={userIcon} alt="alt" />
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
          </div>
          <form className={classes.registerForm1} action={formAction}>
            <div className={`${classes.formItemContainer} ${classes.ItemA}`}>
              <label>User name:</label>
              <input
                type="text"
                name="userName"
                placeholder="User name"
                // value={data.userName}
                // onChange={handleChange}
              />
            </div>
            {state.errors.userName && (
              <p className={classes.errorA}>{state.errors.userName}</p>
            )}
            <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="email@123.com"
                // value={data.email}
                // onChange={handleChange}
              />
            </div>
            {state.errors.email && (
              <p className={classes.errorB}>{state.errors.email}</p>
            )}
            <div className={`${classes.formItemContainer} ${classes.ItemC}`}>
              <label>Password:</label>
              <input
                type="text"
                name="password"
                placeholder="password"
                // value={data.password}
                // onChange={handleChange}
              />
            </div>
            {state.errors.password && (
              <p className={classes.errorC}>{state.errors.password}</p>
            )}
            <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
              <label>Confirm password:</label>
              <input
                type="text"
                name="passwordConfirm"
                placeholder="confirm password"
                // value={data.passwordConfirm}
                // onChange={handleChange}
              />
            </div>
            {state.errors.passwordConfirm && (
              <p className={classes.errorD}>{state.errors.passwordConfirm}</p>
            )}
            <div className={classes.tickRow}>
              <div className="submit-button-container">
                <FormSubmit />
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}
