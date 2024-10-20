/** @format */

"use client";
import { useFormState } from "react-dom";
import { useState } from "react";
import FormSubmit from "./formsubmit";
import classes from "./register-form.module.css";
import Button from "../ui/button";

function SubmitContainer() {
  return (
    <>
      <div className={classes.darkBG}>
        <div className={classes.centered}>
          <h1>Your registration has been sent</h1>
          <p>You will receive confirmation of your application shortly</p>
          <p>Once confirmed, you wull recieve an email</p>
          <Button href="/logout">Logout</Button>
          <Button href="/">Return to homepage and stay logged in</Button>
        </div>
      </div>
    </>
  );
}

export default function RegisterForm({ action }) {
  const [privateBuyer, setPrivateBuyer] = useState(false);
  const [realEstateBuyer, setReaEstateBuyer] = useState(false);
  const [location, setLocation] = useState([false, false]);
  const [state, formAction] = useFormState(action, {});
  const handleClick = () => {
    setConfirm((val) => !val);
  };

  const handlePrivateBuyer = () => {
    setPrivateBuyer(true);
    setReaEstateBuyer(false);
  };

  const handleRealEstateBuyer = () => {
    setReaEstateBuyer(true);
    setPrivateBuyer(false);
  };

  const handleLocation = (e) => {
    const eventSource = e.target.name;
    if (eventSource == "locationOther")
    {
      setLocation([false, true])
    }
    if (eventSource == "locationGreece")
    {
      setLocation([true, false])
    }
  };

  return (
    <>
      {state.success ? (
        <SubmitContainer handle={handleClick} />
      ) : (
        <>
          <img className={classes.logoIndigo} src="./logoindigo.png"></img>
          <form className={classes.registerForm} action={formAction}>
            <div className={classes.registerFormSection}>
              <h1>Your credentials</h1>
              <div className={classes.formRow}>
                <div className={classes.formItemContainer}>
                  <label>Username:</label>
                  <input type="text" name="userName" />
                </div>
                <div className={classes.formItemContainer}>
                  <label>Email:</label>
                  <input type="email" name="email" />
                </div>
              </div>
              <div className={classes.formRow}>
                <div className={classes.formItemContainer}>
                  <label>Password</label>
                  <input type="text" name="password" />
                </div>
                <div className={classes.formItemContainer}>
                  <label>Confirm password:</label>
                  <input type="text" name="passwordConfirm" />
                </div>
              </div>
            </div>
            <div className={classes.registerFormSection}>
              <h1>Registration information</h1>
              <div className={classes.formRow}>
                <div className={classes.formItemContainer}>
                  <label>First name:</label>
                  <input type="text" name="firstName" />
                </div>
                <div className={classes.formItemContainer}>
                  <label>Last name:</label>
                  <input type="text" name="lastName" />
                </div>
              </div>
              <div className={classes.formRow}>
                <div className={classes.formItemContainer}>
                  <label>Comapany name:</label>
                  <input type="text" name="passwordConfirm" />
                </div>
                <div className={classes.formItemContainer}>
                  <label>Phone number - including area code:</label>
                  <input type="text" name="passwordConfirm" />
                </div>
              </div>
              <div className={classes.formtickContainer}>
                <label>Private buyer or real estate agent:</label>
                <div className={classes.tickRow}>
                  <div>
                    <label>Private buyer</label>
                    <input
                      type="checkbox"
                      name="privateBuyer"
                      checked={privateBuyer}
                      onChange={handlePrivateBuyer}
                    ></input>
                  </div>
                  <div>
                    <label>Real estate agent</label>
                    <input
                      type="checkbox"
                      name="reaEstateBuyer"
                      checked={realEstateBuyer}
                      onChange={handleRealEstateBuyer}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={classes.formtickContainer}>
                <label>Location:</label>
                <div className={classes.tickRow}>
                  <div>
                    <label>Greece</label>
                    <input
                      type="checkbox"
                      name="locationGreece"
                      checked={location[0]}
                      onChange={(event) => handleLocation(event)}
                    ></input>
                  </div>
                  <div>
                    <label>Other</label>
                    <input
                      type="checkbox"
                      name="locationOther"
                      checked={location[1]}
                      onChange={(event) => handleLocation(event)}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={classes.formtickContainer}>
                <label>Investment interest:</label>
                <div className={classes.tickRow}>
                  <div>
                    <label>Residential</label>
                    <input type="checkbox"></input>
                  </div>
                  <div>
                    <label>Commercial</label>
                    <input type="checkbox"></input>
                  </div>
                  <div>
                    <label>Land</label>
                    <input type="checkbox"></input>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.submitButtonContainer}>
              <FormSubmit />
            </div>
            {state.errors && (
              <ul>
                {state.errors.map((error) => (
                  <li key={error}>
                    <p>{error}</p>
                  </li>
                ))}
              </ul>
            )}
          </form>
        </>
      )}
    </>
  );
}
