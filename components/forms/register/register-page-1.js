/** @format */

"use client";
import { useState } from "react";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
export default function RegisterFormPage1New({
  data,
  handleNextTab,
  handleChange,
}) {
  const [errors, setErrors] = useState([]);

  const handleNext = () => {
    handleNextTab();
  };

  const handleBuyerType = (event) => {
    handleChange(event);
  };

  const handleLocaleChange = (event) => {
    handleChange(event);
  };

  const handleInvestmentInterest = (event) => {
    handleChange(event);
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
            value={data.location}
            name="location"
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleLocaleChange}
            sx={{ backgroundColor: "white" }}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "gray" }}>Select your buyer type</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled>
              Select your location
            </MenuItem>
            <MenuItem value="Greece">Greece</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <label>What type of investment interests you?</label>

        <FormControl sx={{ width: "100%" }} size="small">
          <Select
            id="demo-simple-select"
            value={data.investmentInterest}
            name="investmentInterest"
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleInvestmentInterest}
            sx={{ backgroundColor: "white", color: "black" }}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "gray" }}>Select your buyer type</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled>
              Select your investment interest
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
            value={data.buyerType}
            name="buyerType"
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleBuyerType}
            sx={{ backgroundColor: "white" }}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "gray" }}>Select your buyer type</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="">
              Select your buyer type
            </MenuItem>
            <MenuItem value="Buying a property">Direct buyer</MenuItem>
            <MenuItem value="Developing a building for ROI">
              Real estate agent
            </MenuItem>
            <MenuItem value="Market analysis">Development investor</MenuItem>
          </Select>
        </FormControl>
      </form>
      <div className={classes.buttonWrapper}>
        <RegistrationButton
          disabled={
            !data.location || !data.investmentInterest || !data.buyerType
              ? true
              : false
          }
          onClick={handleNext}
        >
          Next
        </RegistrationButton>
      </div>
    </>
  );
}
