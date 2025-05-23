/** @format */

"use client";
import { useState } from "react";
import userIcon from "/public/images/icons/add-user.png";
import Image from "next/image";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";

export default function RegisterFormPage3({
  handleBuyer,
  handleLocale,
  handleTimeLine,
  handleInvestment,
  handlePreviousTab,
  handleNextTab,
}) {
  const [errors, setErrors] = useState([]);

  const handleNext = () => {
    if (
      !buyerType.includes(true) ||
      !location.includes(true) ||
      !purchaseTimeline.includes(true) ||
      !investmentInterst.includes(true)
    ) {
      setErrors([{ errorType: "incompleteForm", message: "Please complete all sections" }]);
    }
    else {
      setErrors([]);
      handleNextTab();
    }

    // if (result.errors.length > 0) {
    //   setErrors([...result.errors]);
    // } else {
    //   handleNextTab();
    // }
  };

  // const handleNext = async () => {
  //   handleNextTab();
  // };

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

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="An image of icon which depicts registration" />
        <h2>3/4</h2>
      </div>
      <form className={classes.registerForm3}>
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
      </form>
      {errors[0]?.errorType && (
              <p className={classes.errorParagraph}>{errors[0]?.message}</p>
        )}
      <div className={classes.buttonWrapper}>
        <RegistrationButton onClick={handlePreviousTab}>
          Previous
        </RegistrationButton>
        <RegistrationButton onClick={handleNext}>Next</RegistrationButton>
      </div>
    </>
  );
}
