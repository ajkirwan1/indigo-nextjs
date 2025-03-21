/** @format */
"use client";

import { useState } from "react";
import classes from "./register-page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import RegisterFormPage1New from "@/components/forms/register/register-page-1";
import RegisterFormPage2New from "@/components/forms/register/register-page-2";
import RegisterFormPage3New from "@/components/forms/register/register-page-3";

export default function RegisterPageComponent() {
  const [activeTab, setActiveTab] = useState(0);

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
    investmentInterest: "",
    investmentValue: "",
    previousInvestment: "",
  });

  const handleNextTab = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handlePreviousTab = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const formElements = [,
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
    // <motion.div
    //   key={4}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   exit={{ opacity: 0 }}
    //   className={`${classes.formcontainer} ${classes.large}`}
    // >
    //   <RegisterFormPage2New
    //     handlePreviousTab={handlePreviousTab}
    //     handleNextTab={handleNextTab}
    //     handleChange={handleChange}
    //     handleInterest={handleInterest}
    //     handlePreviousInvest={handlePreviousInvest}
    //     data={data}
    //   />
    // </motion.div>,
    // <motion.div
    //   key={5}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   exit={{ opacity: 0 }}
    //   className={`${classes.formcontainer} ${classes.large}`}
    // >
    //   ,
    //   <RegisterFormPage3New
    //     handlePreviousTab={handlePreviousTab}
    //     handleNextTab={handleNextTab}
    //     handleChange={handleChange}
    //     handleInterest={handleInterest}
    //     handlePreviousInvest={handlePreviousInvest}
    //     data={data}
    //   />
    // </motion.div>,
  ];

  return (
    <>
      <AnimatePresence mode="wait">{formElements[activeTab]}</AnimatePresence>
    </>
  );
}
