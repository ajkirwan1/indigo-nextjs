/** @format */

"use client";
import { useState } from "react";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";

export default function RegisterFormPage3New({ handlePreviousTab }) {
  // const [errors, setErrors] = useState([]);

  const [tickboxSelected, setTickboxSelected] = useState(false);
  const handleCheckBox = () => {
    setTickboxSelected((val) => !val);
  };

  return (
    <div>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
      </div>
      <form className={classes.registerForm1}>
        <div className={`${classes.formItemContainer} ${classes.ItemA}`}>
          <label>Company name</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              variant="outlined"
            />
          </FormControl>
        </div>
        {/* {errors?.find((item) => item.errorType == "username") ? (
          <p className={classes.errorA}>Invalid user name</p>
        ) : errors?.find((item) => item.errorType == "usernameExists") ? (
          <p className={classes.errorA}>Username already exists</p>
        ) : null} */}
        {/* Error */}
        <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
          <label>Email address</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              variant="outlined"
            />
          </FormControl>
        </div>
        {/* Error */}
        <div className={`${classes.formItemContainer} ${classes.ItemC}`}>
          <label>Confirm email address</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              variant="outlined"
            />
          </FormControl>
        </div>
        {/* Error */}
        {/* <PhoneInput country="de" regions={"europe"} /> */}
        <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
          <label>Telephone number</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              variant="outlined"
            />
          </FormControl>
        </div>
        {/* Error */}
        <div className={classes.tickRow}>
          <div className={classes.inputWrapper}>
            <label>
              I agree to receive communications, updates, and promotional
              information from Indigo Consulting. I understand that I can
              unsubscribe at any time.
            </label>
            <Checkbox
              color="default"
              checked={tickboxSelected}
              onChange={handleCheckBox}
              sx={{ padding: "15px" }}
            />
          </div>
        </div>
      </form>
      {/* {errors[0]?.errorType && (
        <p className={classes.errorParagraph}>{errors[0]?.message}</p>
      )} */}
      <div className={classes.buttonWrapper}>
        <RegistrationButton onClick={handlePreviousTab}>
          Previous
        </RegistrationButton>
        <RegistrationButton disabled={!tickboxSelected}>
          Next
        </RegistrationButton>
      </div>
    </div>
  );
}
