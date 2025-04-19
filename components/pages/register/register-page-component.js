/** @format */
"use client";

import { useState } from "react";
import classes from "./register-page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/button";
import RegisterFormPage0New from "@/components/forms/register/register-page-0";
import RegisterFormPage1New from "@/components/forms/register/register-page-1";
import RegisterFormPage2New from "@/components/forms/register/register-page-2";
import RegisterFormPage3New from "@/components/forms/register/register-page-3";

export default function RegisterPageComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const [submissionError, setSubmissionError] = useState("");

  const [data, setData] = useState({
    email: "",
    companyName: "",
    phoneNumber: "",
    buyerType: "",
    location: "",
    purchaseTimeline: "",
    investmentInterest: "",
    investmentRange: "",
    previousInvestment: "",
    confirmEmail: "",
  });

  const handleNextTab = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handlePreviousTab = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleError = (errorMessage) => {
    console.log(errorMessage)
    // setSubmissionError(true);
    setSubmissionError(errorMessage)
  };

  const handleReset = () => {
    setSubmissionError("");
    setData({
      email: "",
      companyName: "",
      phoneNumber: "",
      buyerType: "",
      location: "",
      purchaseTimeline: "",
      investmentInterest: "",
      investmentRange: "",
      previousInvestment: "",
      confirmEmail: "",
    });
    setActiveTab(1);
  };

  const formElements = [
    <motion.div
      key={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`${classes.formcontainer} ${classes.large}`}
    >
      <RegisterFormPage0New
        handleNextTab={handleNextTab}
        handleChange={handleChange}
        data={data}
      />
    </motion.div>,
    <motion.div
      key={1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`${classes.formcontainer} ${classes.large}`}
    >
      <RegisterFormPage1New
        handleNextTab={handleNextTab}
        handleChange={handleChange}
        data={data}
      />
    </motion.div>,
    <motion.div
      key={2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`${classes.formcontainer} ${classes.large}`}
    >
      <RegisterFormPage2New
        handlePreviousTab={handlePreviousTab}
        handleNextTab={handleNextTab}
        handleChange={handleChange}
        data={data}
      />
    </motion.div>,
    <motion.div
      key={3}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`${classes.formcontainer} ${classes.large}`}
    >
      <RegisterFormPage3New
        handlePreviousTab={handlePreviousTab}
        handleNextTab={handleNextTab}
        handleChange={handleChange}
        handleError={handleError}
        data={data}
      />
    </motion.div>,
  ];

  function Error({errorMessage}) {
    return (
      <div className={classes.errorWrapper}>
        <div className={`${classes.errorFormcontainer} ${classes.large}`}>
          <h2>Something went wrong!</h2>
          <p>
          {errorMessage}
            {/* We&apos;re sorry, but something went wrong submitting your details */}
          </p>
          <div className="submit-button-container">
            <Button onClick={handleReset}>Try again</Button>
          </div>
          <Link href="/">Return to home page</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {!submissionError ? (
        <AnimatePresence mode="wait">{formElements[activeTab]}</AnimatePresence>
      ) : (
        <Error errorMessage={submissionError}/>
      )}
    </>
  );
}
