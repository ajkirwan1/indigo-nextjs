/** @format */
"use client";

import { useState } from "react";
import classes from "./register-page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import RegisterFormPage1New from "@/components/forms/register/register-page-1";
import RegisterFormPage2New from "@/components/forms/register/register-page-2";
import RegisterFormPage3New from "@/components/forms/register/register-page-3";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";

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
    investmentRange: "",
    previousInvestment: "",
  });

  const handleNextTab = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handlePreviousTab = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // const [phone, setPhone] = useState("");

  const formElements = [
    // <motion.div
    //   key={0}
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   exit={{ opacity: 0 }}
    //   className={`${classes.formcontainer} ${classes.large}`}
    // >asdsad</motion.div>,
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
