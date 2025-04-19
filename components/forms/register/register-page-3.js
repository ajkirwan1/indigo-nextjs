/** @format */

"use client";
import { useState } from "react";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";
import { RegisterMultiPage } from "@/server/actions/submit-multi-register";
import { Spinner } from "@nextui-org/spinner";
import { RegisterEmail } from "@/lib/register-email";
import { RegisterUser } from "@/server/actions/db/regsiter/register-user";
import "react-phone-input-2/lib/material.css";

export default function RegisterFormPage3New({
  handlePreviousTab,
  data,
  handleChange,
  handleError
}) {
  const [errors, setErrors] = useState({});
  const [tickboxSelected, setTickboxSelected] = useState(false);
  const [submitPending, setsubmitPending] = useState(false);

  const handleCheckBox = () => {
    setTickboxSelected((val) => !val);
  };

  const handleSubmitForm = async () => {
    setErrors([]);
    setsubmitPending(true);

    const submitResult = await RegisterUser(data);
    if (submitResult.dbError) {
      handleError(submitResult.dbError)
    }
    if (submitResult?.success) {
      const registerEmail = await RegisterEmail(data);
      if (registerEmail?.emailSubmissionError) {
        handleError(registerEmail.emailSubmissionError)
      }

    } else {
      setErrors({ ...submitResult });
    }
    setsubmitPending(false);
  };

  function Form() {
    <form className={classes.registerForm1}>
    <div className={`${classes.formItemContainer} ${classes.ItemA}`}>
      <label>Company or personal name</label>
      <FormControl sx={{ width: "100%" }} size="small">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          name="companyName"
        />
      </FormControl>
    </div>
    {errors.companyName && (
      <p className={classes.errorA}>{errors.companyName}</p>
    )}
    <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
      <label>Telephone number</label>
      <FormControl sx={{ width: "100%" }} size="small">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          name="phoneNumber"
        />
      </FormControl>
    </div>
    {errors.phoneNumber && (
      <p className={classes.errorB}>{errors.phoneNumber}</p>
    )}
    <div className={`${classes.formItemContainer} ${classes.ItemC}`}>
      <label>Email address</label>
      <FormControl sx={{ width: "100%" }} size="small">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          name="email"
        />
      </FormControl>
    </div>
    {errors.email && <p className={classes.errorC}>{errors.email}</p>}
    <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
      <label>Confirm email address</label>
      <FormControl sx={{ width: "100%" }} size="small">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          name="confirmEmail"
        />
      </FormControl>

    </div>
    {errors.confirmEmail && (
        <p className={classes.errorD}>{errors.confirmEmail}</p>
      )}
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
  }

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="alt" />
      </div>
      <form className={classes.registerForm1}>
        <div className={`${classes.formItemContainer} ${classes.ItemA}`}>
          <label>Company or personal name</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              name="companyName"
            />
          </FormControl>
        </div>
        {errors.companyName && (
          <p className={classes.errorA}>{errors.companyName}</p>
        )}
        <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
          <label>Telephone number</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              name="phoneNumber"
            />
          </FormControl>
        </div>
        {errors.phoneNumber && (
          <p className={classes.errorB}>{errors.phoneNumber}</p>
        )}
        <div className={`${classes.formItemContainer} ${classes.ItemC}`}>
          <label>Email address</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              name="email"
            />
          </FormControl>
        </div>
        {errors.email && <p className={classes.errorC}>{errors.email}</p>}
        <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
          <label>Confirm email address</label>
          <FormControl sx={{ width: "100%" }} size="small">
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              name="confirmEmail"
            />
          </FormControl>

        </div>
        {errors.confirmEmail && (
            <p className={classes.errorD}>{errors.confirmEmail}</p>
          )}
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
      <div className={classes.buttonWrapper}>
        {submitPending ? (
          <div className={classes.spinner}>
            <Spinner color="secondary" size="lg" />
          </div>
        ) : (
          <>
            <RegistrationButton onClick={handlePreviousTab}>
              Previous
            </RegistrationButton>
            <RegistrationButton
              disabled={!tickboxSelected}
              onClick={() => handleSubmitForm()}
            >
              Submit
            </RegistrationButton>
          </>
        )}
      </div>
    </>
  );
}
