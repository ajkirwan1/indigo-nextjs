/** @format */

"use client";
import classes from "./register-form.module.css";
import RegistrationButton from "@/components/ui/buttons/registration-button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import userIcon from "/public/images/icons/add-user.png";

export default function RegisterFormPage1New({
  handleChange,
  handlePreviousTab,
  handleNextTab,
  data,
}) {
  const handleNext = () => {
    handleNextTab();
  };

  const handleselect = (event) => {
    handleChange(event);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="alt" />
      </div>
      <form className={classes.registerForm3}>
        <label>What is your investment range?</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <Select
            id="demo-simple-select"
            value={data.investmentRange}
            name="investmentRange"
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleselect}
            sx={{ backgroundColor: "white" }}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "gray" }}>Select</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled sx={{ color: "gray" }}>
              Select
            </MenuItem>
            <MenuItem value="€500K-€1M">€500K-€1M</MenuItem>
            <MenuItem value="€1M-€2M">€1M-€2M</MenuItem>
            <MenuItem value="€1M-€2M">€2M-€3M</MenuItem>
            <MenuItem value="€3M+">€3M+</MenuItem>
          </Select>
        </FormControl>
        <label>Preferred timeline for purchase or investment?</label>
        <FormControl sx={{ width: {
            xs: "100%",  // extra-small screens (e.g. phones)
            sm: "80%",   // small screens (optional step)
            md: "80%",   // medium screens and up
          }}} size="small">
          <Select
            id="demo-simple-select"
            value={data.purchaseTimeline}
            name="purchaseTimeline"
            inputProps={{ "aria-label": "Without label" }}
            // autoWidth
            displayEmpty
            onChange={handleselect}
            sx={{ backgroundColor: "white" }}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "gray" }}>Select</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled sx={{ color: "gray" }}>
              Select
            </MenuItem>
            <MenuItem value="Next 6 months">Next 6 months</MenuItem>
            <MenuItem value="6 - 12 months">6 - 12 months</MenuItem>
            <MenuItem value="12 - 18 months">12 - 18 months</MenuItem>
            <MenuItem value="18 - 24 months">18 - 24 months</MenuItem>
            <MenuItem value="+24 months">+24 months</MenuItem>
          </Select>
        </FormControl>
        <label>Have you previously invested in Greek real estate?</label>
        <FormControl sx={{ width: "100%" }} size="small">
          <Select
            id="demo-simple-select"
            value={data.previousInvestment}
            name="previousInvestment"
            inputProps={{ "aria-label": "Without label" }}
            autoWidth
            displayEmpty
            onChange={handleselect}
            sx={{ backgroundColor: "white" }}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "gray" }}>Select</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled sx={{ color: "gray" }}>
              Select
            </MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </form>
      <div className={classes.buttonWrapper}>
        <RegistrationButton onClick={handlePreviousTab}>
          Previous
        </RegistrationButton>
        <RegistrationButton
          disabled={
            !data.purchaseTimeline ||
            !data.previousInvestment ||
            !data.investmentRange
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
