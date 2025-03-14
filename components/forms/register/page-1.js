/** @format */

"use client";
import classes from "./register-form.module.css";
import { CheckUserAction } from "@/server/actions/check-user-action";
import { useState } from "react";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";
import RegistrationButton from "@/components/ui/buttons/registration-button";

export default function RegisterFormPage1({
  data,
  handleChange,
  handleNextTab,
}) {
  const [errors, setErrors] = useState([]);

  const handleNext = async () => {
    const result = await CheckUserAction(
      data.userName,
      data.email,
      data.password,
      data.passwordConfirm
    );
    if (result.errors.length > 0) {
      setErrors([...result.errors]);
    } else {
      handleNextTab();
    }
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="alt" />
        <h2>1/4</h2>
      </div>
      <form className={classes.registerForm1}>
        <div className={classes.formItemContainer}>
          <input
            type="text"
            name="userName"
            placeholder="User name"
            value={data.userName}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <input
            type="email"
            name="email"
            placeholder="email@123.com"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formItemContainer}>
          <input
            type="text"
            name="passwordConfirm"
            placeholder="confirm password"
            value={data.passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <div className={classes.buttonContainer}></div>
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
          NEXT
        </RegistrationButton>
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
