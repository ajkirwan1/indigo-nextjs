/** @format */

"use client";
import { useFormState } from "react-dom";
import { useState } from "react";
import FormSubmit from "./formsubmit";
import classes from "./login-form.module.css";
import Link from "next/link";
import Button from "../ui/button";
import ModalBackdrop from "../modal-backdrop";

function Form({ handleChange, state, formAction, isButtonDisabled }) {
  return (
    <form className={classes.loginForm} action={formAction}>
      <div className={classes.formItemContainer}>
        <label>User name:</label>
        <input
          className={state.errors?.find((item) =>
            item.errorType == "username" ? `${classes.inputError}` : null
          )}
          type="text"
          name="username"
          onChange={handleChange}
        />
        {state.errors?.find((item) => item.errorType == "username") ? (
          <p className={classes.errorA}>Invalid username </p>
        ) : null}
      </div>
      <div className={classes.formItemContainer}>
        <label>Password:</label>
        <input
          className={state.errors?.find((item) =>
            item.errorType == "password" ? `${classes.inputError}` : null
          )}
          // type="text"
          type="password"
          name="password"
          onChange={handleChange}
        />
        {state.errors?.find((item) => item.errorType == "password") ? (
          <p className={classes.errorA}>Invalid password </p>
        ) : null}
      </div>
      <div
        className={
          // isButtonDisabled
          false
            ? `${classes.submitButtonContainer} ${classes.submitButtonContainerClosed}`
            : `${classes.submitButtonContainer}`
        }
      >
        <FormSubmit
          disabled={false}
          // disabled={isButtonDisabled}
        />
      </div>
    </form>
  );
}

const initialState = { errorMessage: "", errors: [], submitted: false };

export default function LoginForm({ action, redirection }) {
  const [state, formAction] = useFormState(action, initialState, {
    redirection,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { username, password } = data;

    if (password.length > 5 && username.length > 5) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleReset = () => {
    state.errorMessage = "";
    setData({ username: "", password: "" });
  };

  return (
    <>
    {/* <ModalBackdrop /> */}
      <h1>Login</h1>
      {!state.errorMessage ? (
        <Form
          formAction={formAction}
          state={state}
          handleChange={handleChange}
          isButtonDisabled={isButtonDisabled}
        />
      ) : (
        <>
          <h2>Something went wrong!</h2>
          <p>{state.errorMessage}</p>
          <div className={classes.submitButtonContainer}>
            <Button onClick={handleReset}>Try again</Button>
          </div>
          <Link href="/">Return to home page</Link>
        </>
      )}
    </>
  );
}
