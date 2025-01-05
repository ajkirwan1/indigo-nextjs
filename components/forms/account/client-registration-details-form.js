/** @format */

"use client";

import { useState } from "react";
import classes from "./client-registration-details-form.module.css";
import Button from "@/components/ui/button";

export default function ClientRegistrationDetailsForm() {
  const [errors, setErrors] = useState([]);
  const [formDisabled, setFormDisabled] = useState(true);

  const [buyerType, setBuyerType] = useState([false, false]);
  const [location, setLocation] = useState([false, false]);
  const [purchaseTimeline, setpurchaseTimeline] = useState([
    false,
    false,
    false,
  ]);
  const [investmentInterst, setInvestmentInterst] = useState([
    false,
    false,
    false,
  ]);
  const [submitPending, setsubmitPending] = useState(false);

  const [investmentInterest, setinvestmentInterest] = useState([
    false,
    false,
    false,
    // false,
  ]);
  const [previousInvestment, setpreviousInvestment] = useState([false, false]);

  const handleBuyerType = (e) => {
    handleBuyer(e);
    const eventSource = e.target.name;
    if (eventSource == "privateBuyer") {
      setBuyerType([true, false]);
    }
    if (eventSource == "realEstateBuyer") {
      setBuyerType([false, true]);
    }
  };

  const handleLocaleChange = (e) => {
    handleLocale(e);
    const eventSource = e.target.name;
    if (eventSource == "locationOther") {
      setLocation([false, true]);
    }
    if (eventSource == "locationGreece") {
      setLocation([true, false]);
    }
  };

  const handlePurchaseTimeline = (e) => {
    handleTimeLine(e);
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
  };

  const handleInvestmentInterest = (e) => {
    handleInvestment(e);
    const eventSource = e.target.name;
    if (eventSource == "residential") {
      setInvestmentInterst([
        ...investmentInterst,
        (investmentInterst[0] = !investmentInterst[0]),
      ]);
    }
    if (eventSource == "commercial") {
      setInvestmentInterst([
        ...investmentInterst,
        (investmentInterst[1] = !investmentInterst[1]),
      ]);
    }
    if (eventSource == "land") {
      setInvestmentInterst([
        ...investmentInterst,
        (investmentInterst[2] = !investmentInterst[2]),
      ]);
    }
  };


  const handleEnable = () => {
    setFormDisabled(false);
    setErrors([{disabledError: false}]);
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

  };

  return (
    <>
      <form className={classes.registerForm}>
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
              onChange={handleInvestmentInterest}
            ></input>
          </div>
          <div className={classes.inputWrapper}>
            <label>Commercial</label>
            <input
              type="checkbox"
              name="commercial"
              onChange={handleInvestmentInterest}
            ></input>
          </div>
          <div className={classes.inputWrapper}>
            <label>Land</label>
            <input
              type="checkbox"
              name="land"
              onChange={handleInvestmentInterest}
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
              checked={investmentInterest[0]}
              onChange={(event) => handleInvestmentInterest(event)}
            ></input>
          </div>
          <div className={classes.inputWrapper}>
            <label>50 - 100</label>
            <input
              type="checkbox"
              name="50-100"
              checked={investmentInterest[1]}
              onChange={(event) => handleInvestmentInterest(event)}
            ></input>
          </div>
          <div className={classes.inputWrapper}>
            <label>100 - 150</label>
            <input
              type="checkbox"
              name="100-150"
              checked={investmentInterest[2]}
              onChange={(event) => handleInvestmentInterest(event)}
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
    </>
  );
}
