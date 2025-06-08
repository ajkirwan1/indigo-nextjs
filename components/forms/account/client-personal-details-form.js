/** @format */
"use client";

import classes from "./client-personal-details-form.module.css";
import { useState } from "react";
import ValidatePersonalDetails from "@/utils/validate-personal-details";
import Button from "@/components/ui/button";
import { UpdateUserPersonalInfo } from "@/server/actions/db/admin/update-user-personal-info";
import { Spinner } from "@nextui-org/spinner";

export default function ClientPersonalDetailsForm({
  username,
  firstname,
  email,
  phonenumber,
  id,
}) {
  const [data, setData] = useState({
    userName: username,
    email,
    firstName: firstname,
    phoneNumber: phonenumber,
  });

  const [formDisabled, setFormDisabled] = useState(true);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (formDisabled) {
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
      userName: username,
      email,
      firstName: firstname,
      phoneNumber: phonenumber,
    });
    setErrors([]);
    setFormDisabled(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const validateResult = ValidatePersonalDetails(data);
    setLoading(false);
    if (validateResult?.errors) {
      setErrors([...validateResult.errors]);
      return;
    }

    const submitResult = await UpdateUserPersonalInfo(data, id);

    if (submitResult?.dbError) {
      setErrors([{ ...submitResult }]);
    } else {
      setData({
        userName: submitResult.username,
        email: submitResult.email,
        firstName: submitResult.firstname,
        phoneNumber: submitResult.phonenumber,
      });
      setErrors([]);
      setFormDisabled(true);
    }
  };

  const handleRetry = () => {
    setData({
      userName: username,
      email,
      firstName: firstname,
      phoneNumber: phonenumber,
    });
    setErrors([]);
  };

  return (
    <>
      {errors[0]?.dbError ? (
        <div>
          <p>
            An error occured submitting your update. Our records have not been
            updated
          </p>
          <div className="submit-button-container">
            <Button onClick={handleRetry}>Try again</Button>
          </div>
        </div>
      ) : (
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
              <p className={classes.errorA}>Invalid user name</p>
            ) : null}
            <div className={`${classes.formItemContainer} ${classes.ItemB}`}>
              <label>Name:</label>
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
              <p className={classes.errorC}>Invalid email</p>
            ) : null}
            <div className={`${classes.formItemContainer} ${classes.ItemD}`}>
              <label>Phone number:</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder={phonenumber}
                value={data.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {errors?.find((item) => item.errorType == "phonenumber") ? (
              <p className={classes.errorD}>Invalid phone number</p>
            ) : null}
          </form>
          <div className={classes.buttonWrapper}>
            {errors[0]?.disabledError ? (
              <p>
                Form is disbaled for editting. To update you details, please
                click edit
              </p>
            ) : null}
            {formDisabled ? (
              <div className="submit-button-container">
                <Button onClick={handleEnable}>Edit</Button>
              </div>
            ) : (
              <div className={classes.doubleButtonWrapper}>
                <div className="submit-button-container">
                  {loading ? (
                    <Spinner size="lg" />
                  ) : (
                    <Button onClick={handleSubmit}>Submit</Button>
                  )}
                </div>
                <div className="submit-button-container">
                  <Button onClick={handleReset}>Close</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
