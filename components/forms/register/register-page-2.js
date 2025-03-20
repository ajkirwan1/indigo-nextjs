/** @format */

"use client";
import { useState } from "react";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

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
          <label>Are you located in Greece or a foreign country?</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <Select
            id="demo-simple-select"
            value={location}
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleLocaleChange}
          >
            <MenuItem value="">
              Location
            </MenuItem>
            <MenuItem value="Greece">Greece</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <label>What type of investment interests you?</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <Select
            id="demo-simple-select"
            value={investmentInterst}
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleInvestmentInterest}
          >
            <MenuItem value="">
              Investment interest
            </MenuItem>
            <MenuItem value="Buying a property">Buying a property</MenuItem>
            <MenuItem value="Developing a building for ROI">
              Developing a building for ROI
            </MenuItem>
            <MenuItem value="Market analysis">Market analysis</MenuItem>
            <MenuItem value="Business plan evaluation">
              Business plan evaluation
            </MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <label>
          Are you a direct buyer, real estate agent, or development investor?
        </label>
        <FormControl sx={{ width: "100%" }} size="small">
          <Select
            id="demo-simple-select"
            value={buyerType}
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleBuyerType}
          >
            <MenuItem value="">
             Type
            </MenuItem>
            <MenuItem value="Buying a property">Direct buyer</MenuItem>
            <MenuItem value="Developing a building for ROI">
              Real estate agent
            </MenuItem>
            <MenuItem value="Market analysis">Development investor</MenuItem>
          </Select>
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
