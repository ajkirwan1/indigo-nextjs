/** @format */
"use client";

import { useState } from "react";
import classes from "./register-page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import RegisterFormPage1 from "@/components/forms/register/page-1";
import RegisterFormPage2 from "@/components/forms/register/page-2";
import RegisterFormPage3 from "@/components/forms/register/page-3";
import RegisterFormPage4 from "@/components/forms/register/page-4";

export default function RegisterPageComponent() {
  const [activeTab, setActiveTab] = useState(0);
  // const [confirmed, setConfirmed] = useState(false);

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    buyerType: "",
    location: "",
    purchaseTimeline: "",
    investmentInterest: { residential: false, commercial: false, land: false },
    investmentValue: "",
    previousInvestment: "",
  });

  const handleNextTab = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handlePreviousTab = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleBuyer = (event) => {
    const { name } = event.target;
    if (name == "privateBuyer") {
      setData({
        ...data,
        buyerType: "privateBuyer",
      });
    } else if (name == "realEstateBuyer") {
      setData({
        ...data,
        buyerType: "realEstateBuyer",
      });
    }
  };

  const handleLocale = (event) => {
    const { name } = event.target;
    if (name == "locationOther") {
      setData({
        ...data,
        location: "locationOther",
      });
    } else if (name == "locationGreece") {
      setData({
        ...data,
        location: "locationGreece",
      });
    }
  };

  const handleTimeLine = (event) => {
    const { name } = event.target;
    if (name == "sixMonths") {
      setData({
        ...data,
        purchaseTimeline: "sixMonths",
      });
    } else if (name == "sixToTwelveMonths") {
      setData({
        ...data,
        purchaseTimeline: "sixToTwelveMonths",
      });
    } else if (name == "twelveMonths") {
      setData({
        ...data,
        purchaseTimeline: "twelveMonths",
      });
    }
  };

  const handleInvestment = (event) => {
    const { name } = event.target;

    if (name == "residential") {
      setData({
        ...data,
        investmentInterest: {
          ...data.investmentInterest,
          residential: !data.investmentInterest.residential,
        },
      });
    } else if (name == "commercial") {
      setData({
        ...data,
        investmentInterest: {
          ...data.investmentInterest,
          commercial: !data.investmentInterest.commercial,
        },
      });
    } else if (name == "land") {
      setData({
        ...data,
        investmentInterest: {
          ...data.investmentInterest,
          land: !data.investmentInterest.land,
        },
      });
    }
  };

  const handleInterest = (event) => {
    const { name } = event.target;
    if (name == "50") {
      setData({
        ...data,
        investmentValue: "50",
      });
    } else if (name == "50-100") {
      setData({
        ...data,
        investmentValue: "50-100",
      });
    } else if (name == "100-150") {
      setData({
        ...data,
        investmentValue: "100-150",
      });
    } else if (name == "150+") {
      setData({
        ...data,
        investmentValue: "150+",
      });
    }
  };

  const handlePreviousInvest = (event) => {
    const { name } = event.target;
    if (name == "yes") {
      setData({
        ...data,
        previousInvestment: "yes",
      });
    } else if (name == "no") {
      setData({
        ...data,
        previousInvestment: "no",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const formElements = [
    <motion.div
      key={1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={classes.formcontainer}
    >
      <RegisterFormPage1
        handleNextTab={handleNextTab}
        data={data}
        handleChange={handleChange}
      />
    </motion.div>,
    <motion.div
      key={2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={classes.formcontainer}
    >
      <RegisterFormPage2
        data={data}
        handleChange={handleChange}
        handlePreviousTab={handlePreviousTab}
        handleNextTab={handleNextTab}
        activeTab={activeTab}
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
      <RegisterFormPage3
        handlePreviousTab={handlePreviousTab}
        handleNextTab={handleNextTab}
        handleLocale={handleLocale}
        handleBuyer={handleBuyer}
        handleChange={handleChange}
        handleTimeLine={handleTimeLine}
        handleInvestment={handleInvestment}
        data={data}
      />
    </motion.div>,
    <motion.div
      key={4}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`${classes.formcontainer} ${classes.large}`}
    >
      <RegisterFormPage4
        handlePreviousTab={handlePreviousTab}
        handleNextTab={handleNextTab}
        handleChange={handleChange}
        handleInterest={handleInterest}
        handlePreviousInvest={handlePreviousInvest}
        data={data}
      />
    </motion.div>,
  ];

  return (
    <>
      <AnimatePresence mode="wait">{formElements[activeTab]}</AnimatePresence>
    </>
  );
}
