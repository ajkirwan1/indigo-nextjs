/** @format */
"use client";

import classes from "./client-personal-details-form.module.css";
import { useState } from "react";
import ValidatePersonalDetails from "@/utils/validate-personal-details";
import Button from "@/components/ui/button";

export default function ClientPersonalDetailsForm({
  username,
  firstname,
  lastname,
  email,
  companyname,
  phonenumber,
}) {
  const [data, setData] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    companyname: "",
    phonenumber: "",
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
      setErrors([{ disabledError: true }]);
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleEnable = () => {
    setFormDisabled(false);
    setErrors([{ disabledError: false }]);
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
    if (result.errors) {
      setErrors([...result.errors]);
    }
    console.log(errors);
  };

  return (
    <div>
      <form
        className={
          formDisabled
            ? `${classes.personalDetailsForm}`
            : `${classes.personalDetailsForm} ${classes.enabled}`
        }
      >
        <div className={`${classes.formItemContainer} ${classes.ItemA}`}>
          <label>User name:</label>
          <input
            type="text"
            name="userName"
            placeholder={username}
            value={data.userName}
            onChange={handleChange}
          />
        </div>
        {errors?.find((item) => item.errorType == "username") ? (
          <p className={classes.errorA}>Invalid first name</p>
        ) : null}
        <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            placeholder={firstname}
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        {errors?.find((item) => item.errorType == "firstname") ? (
          <p className={classes.errorB}>Invalid first name</p>
        ) : null}
        <div className={`${classes.formItemContainer} ${classes.ItemC}`}>
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            placeholder={lastname}
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        {errors?.find((item) => item.errorType == "lastname") ? (
          <p className={classes.errorC}>Invalid last name</p>
        ) : null}
        <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder={email}
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {errors?.find((item) => item.errorType == "lastname") ? (
          <p className={classes.errorD}>Invalid email</p>
        ) : null}
        <div className={`${classes.formItemContainer} ${classes.ItemE}`}>
          <label>Company name:</label>
          <input
            type="text"
            name="companyName"
            placeholder={companyname}
            value={data.companyname}
            onChange={handleChange}
          />
        </div>
        {errors?.find((item) => item.errorType == "lastname") ? (
          <p className={classes.errorE}>Invalid first name</p>
        ) : null}
        <div className={`${classes.formItemContainer} ${classes.ItemF}`}>
          <label>Phone number:</label>
          <input
            type="text"
            name="phonenNumber"
            placeholder={phonenumber}
            value={data.phonenumber}
            onChange={handleChange}
          />
        </div>
        {errors?.find((item) => item.errorType == "email") ? (
          <p className={classes.errorF}>Invalid first name</p>
        ) : null}
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
