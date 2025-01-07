/** @format */

"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import classes from "./client-registration-details-form.module.css";
import Button from "@/components/ui/button";
import { UpdateUserAccountRegisrationInfo } from "@/server/actions/db/account-registration-update";
import FormSubmit from "../formsubmit";

export default function ClientRegistrationDetailsForm({ user, action, id }) {
  //   const { buyertype } = user;
  const initialState = { dbError: "", id };
  const [state, formAction] = useFormState(action, initialState);
  const [errors, setErrors] = useState([]);
  const [formDisabled, setFormDisabled] = useState(true);

  const [buyerType, setBuyerType] = useState([false, false]);
  const [location, setLocation] = useState([false, false]);
  const [purchaseTimeline, setpurchaseTimeline] = useState([
    false,
    false,
    false,
  ]);
  const [investmentInterest, setInvestmentInterst] = useState([
    false,
    false,
    false,
  ]);
  const [submitPending, setsubmitPending] = useState(false);

  const [investmentInterestValue, setinvestmentInterestValue] = useState([
    false,
    false,
    false,
    // false,
  ]);

  const [previousInvestment, setpreviousInvestment] = useState([false, false]);

  const handleInitialise = () => {
    if (user.buyertype.includes("agent")) {
      setBuyerType([false, true]);
    } else setBuyerType([true, false]);
    if (user.location.includes("greece")) {
      setLocation([true, false]);
    } else setLocation([false, true]);
    if (user.purchasetimeline.includes("6 - 12 months")) {
      setpurchaseTimeline([false, true, false]);
    } else setpurchaseTimeline([true, false, false]);
    if (user.estinvestmentinterest.includes("100,000€ - 150,000€")) {
      setInvestmentInterst([false, false, true]);
    } else setInvestmentInterst([true, false, false]);
    if (user.previousinvestment.includes("yes")) {
      setpreviousInvestment([true, false]);
    } else setpreviousInvestment([false, true]);
  };

  useEffect(() => {
    handleInitialise();
  }, []);

  const handleBuyerType = (e) => {
    if (formDisabled) {
      setErrors([{ disabledError: true }]);
    } else {
      const eventSource = e.target.name;
      if (eventSource == "privateBuyer") {
        setBuyerType([true, false]);
      }
      if (eventSource == "realEstateBuyer") {
        setBuyerType([false, true]);
      }
    }
  };

  const handleLocaleChange = (e) => {
    if (formDisabled) {
      setErrors([{ disabledError: true }]);
    } else {
      const eventSource = e.target.name;
      if (eventSource == "locationOther") {
        setLocation([false, true]);
      }
      if (eventSource == "locationGreece") {
        setLocation([true, false]);
      }
    }
  };

  const handlePurchaseTimeline = (e) => {
    if (formDisabled) {
      setErrors([{ disabledError: true }]);
    } else {
      const eventSource = e.target.name;
      if (eventSource == "sixMonths") {
        setpurchaseTimeline([true, false, false]);
      }
      if (eventSource == "sixToTwelveMonths") {
        setpurchaseTimeline([false, true, false]);
      }
      if (eventSource == "twelveMonths") {
        setpurchaseTimeline([false, false, true]);
      }
    }
  };

  const handleInvestmentInterest = (e) => {
    if (formDisabled) {
      setErrors([{ disabledError: true }]);
    } else {
      const eventSource = e.target.name;
      // console.log(eventSource);
      if (eventSource == "residential") {
        setInvestmentInterst([
          (investmentInterest[0] = !investmentInterest[0]),
          (investmentInterest[1] = investmentInterest[1]),
          (investmentInterest[2] = investmentInterest[2]),
        ]);
      }
      if (eventSource == "commercial") {
        setInvestmentInterst([
          (investmentInterest[0] = investmentInterest[0]),
          (investmentInterest[1] = !investmentInterest[1]),
          (investmentInterest[2] = investmentInterest[2]),
        ]);
      }
      if (eventSource == "land") {
        setInvestmentInterst([
          (investmentInterest[0] = investmentInterest[0]),
          (investmentInterest[1] = investmentInterest[1]),
          (investmentInterest[2] = !investmentInterest[2]),
        ]);
      }
    }
    // console.log(investmentInterest);
  };

  const handleInvestmentInterestValue = (e) => {
    if (formDisabled) {
      setErrors([{ disabledError: true }]);
    } else {
      const eventSource = e.target.name;

      if (eventSource == "50") {
        setinvestmentInterestValue([true, false, false]);
      }
      if (eventSource == "50-100") {
        setinvestmentInterestValue([false, true, false]);
      }
      if (eventSource == "100-150") {
        setinvestmentInterestValue([false, false, true]);
      }
    }
  };

  const handlePreviousInvestment = (e) => {
    if (formDisabled) {
      setErrors([{ disabledError: true }]);
    } else {
      const eventSource = e.target.name;
      if (eventSource == "yes") {
        setpreviousInvestment([true, false]);
      }
      if (eventSource == "no") {
        setpreviousInvestment([false, true]);
      }
    }
  };

  const handleEnable = () => {
    setFormDisabled(false);
    setErrors([{ disabledError: false }]);
  };

  const handleReset = () => {
    console.log(state?.dbError)
    handleInitialise();
    setFormDisabled(true);
    if (state?.dbError) {
      state.dbError = "";
      state.id = id;
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const result = await UpdateUserAccountRegisrationInfo();

  //   if (result.dbError) {
  //     console.log(result.dbError);
  //   }
  // };

  return (
    <>
      {!state?.dbError ? (
        // <form className={classes.registerForm}>
        <form className={classes.registerForm} action={formAction}>
          <label>Private buyer or real estate agent:</label>
          <div className={classes.tickRow}>
            <div className={classes.inputWrapper}>
              <label>Private buyer</label>
              <input
                type="checkbox"
                name="privateBuyer"
                checked={buyerType[0]}
                onChange={handleBuyerType}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>Real estate agent</label>
              <input
                type="checkbox"
                name="realEstateBuyer"
                checked={buyerType[1]}
                onChange={handleBuyerType}
              ></input>
            </div>
          </div>
          <label>Location:</label>
          <div className={classes.tickRow}>
            <div className={classes.inputWrapper}>
              <label>Greece</label>
              <input
                type="checkbox"
                name="locationGreece"
                checked={location[0]}
                onChange={handleLocaleChange}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>Other</label>
              <input
                type="checkbox"
                name="locationOther"
                checked={location[1]}
                onChange={handleLocaleChange}
              ></input>
            </div>
          </div>
          <label>Prefered purchase timeline (months):</label>
          <div className={classes.tickRow}>
            <div className={classes.inputWrapper}>
              <label>Within 6</label>
              <input
                type="checkbox"
                name="sixMonths"
                checked={purchaseTimeline[0]}
                onChange={(event) => handlePurchaseTimeline(event)}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>6 - 12</label>
              <input
                type="checkbox"
                name="sixToTwelveMonths"
                checked={purchaseTimeline[1]}
                onChange={(event) => handlePurchaseTimeline(event)}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>+12</label>
              <input
                type="checkbox"
                name="twelveMonths"
                checked={purchaseTimeline[2]}
                onChange={(event) => handlePurchaseTimeline(event)}
              ></input>
            </div>
          </div>
          <label>Investment interest:</label>
          <div className={classes.tickRow}>
            <div className={classes.inputWrapper}>
              <label>Residential</label>
              <input
                type="checkbox"
                name="residential"
                checked={investmentInterest[0]}
                onChange={(event) => handleInvestmentInterest(event)}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>Commercial</label>
              <input
                type="checkbox"
                name="commercial"
                checked={investmentInterest[1]}
                onChange={(event) => handleInvestmentInterest(event)}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>Land</label>
              <input
                type="checkbox"
                name="land"
                checked={investmentInterest[2]}
                onChange={(event) => handleInvestmentInterest(event)}
              ></input>
            </div>
          </div>
          <label>Estimated investment interest - 1,000s €</label>
          <div className={classes.tickRow}>
            <div className={classes.inputWrapper}>
              <label>Up to 50</label>
              <input
                type="checkbox"
                name="50"
                checked={investmentInterestValue[0]}
                onChange={(event) => handleInvestmentInterestValue(event)}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>50 - 100</label>
              <input
                type="checkbox"
                name="50-100"
                checked={investmentInterestValue[1]}
                onChange={(event) => handleInvestmentInterestValue(event)}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>100 - 150</label>
              <input
                type="checkbox"
                name="100-150"
                checked={investmentInterestValue[2]}
                onChange={(event) => handleInvestmentInterestValue(event)}
              ></input>
            </div>
          </div>
          <label>Have you previously invested in Greek real estate?</label>
          <div className={classes.tickRow}>
            <div className={classes.inputWrapper}>
              <label>Yes</label>
              <input
                type="checkbox"
                name="yes"
                checked={previousInvestment[0]}
                onChange={(event) => handlePreviousInvestment(event)}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <label>No</label>
              <input
                type="checkbox"
                name="no"
                checked={previousInvestment[1]}
                onChange={(event) => handlePreviousInvestment(event)}
              ></input>
            </div>
          </div>
          <div className={classes.buttonWrapper}>
            {errors[0]?.disabledError ? (
              <p>
                Form is disbaled for editting. To update you details, please
                click enable
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
                  {/* <Button onClick={handleSubmit}>Update</Button> */}
                  <FormSubmit>Submit</FormSubmit>
                </div>
              </div>
            )}
          </div>
        </form>
      ) : (
        <>
          <p>An error occured updating the database</p>
          <div className="submit-button-container">
            <Button onClick={handleReset}>Try again</Button>
          </div>
        </>
      )}
    </>
  );
}
