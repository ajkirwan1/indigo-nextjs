/** @format */

"use client";
import { useState } from "react";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export default function RegisterFormPage1New({
  handleBuyer,
  handlePreviousTab,
  handleInvestment,
  handleNextTab,
}) {
  const [errors, setErrors] = useState([]);

  const handleNext = () => {
    // if (
    //   buyerType.includes(true) ||
    //   location.includes(true) ||
    //   purchaseTimeline.includes(true) ||
    //   investmentInterst.includes(true)
    // ) {
    //   setErrors([
    //     {
    //       errorType: "incompleteForm",
    //       message: "Please complete all sections",
    //     },
    //   ]);
    // } else {
    //   setErrors([]);
    //   handleNextTab();
    // }
    handleNextTab();
    // if (result.errors.length > 0) {
    //   setErrors([...result.errors]);
    // } else {
    //   handleNextTab();
    // }
  };

  // const handleNext = async () => {
  //   handleNextTab();
  // };

  const [buyerType, setBuyerType] = useState("");

  const handleBuyerType = (event) => {
    handleBuyer(event);
    setBuyerType(event.target.value);
  };

  const [location, setLocation] = useState("");

  const handleLocaleChange = (event) => {
    // const eventSource = event.target.name;
    setLocation(event.target.value);
  };

  const [investmentInterst, setInvestmentInterst] = useState("");

  const handleInvestmentInterest = (event) => {
    handleInvestment(event);
    setInvestmentInterst(event.target.value);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
      </div>
      <form className={classes.registerForm3}>
        <label>Company name</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <TextField
            id="outlined-basic"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            variant="outlined"
          />
        </FormControl>
        <label>Email address</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <TextField
            id="outlined-basic"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            variant="outlined"
          />
        </FormControl>
        <label>Confirm email address</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <TextField
            id="outlined-basic"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            variant="outlined"
          />
        </FormControl>
        <label>Telephone number</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <TextField
            id="outlined-basic"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            variant="outlined"
          />
        </FormControl>
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
