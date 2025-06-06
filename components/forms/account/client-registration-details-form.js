/** @format */

"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import classes from "./client-registration-details-form.module.css";
import Button from "@/components/ui/button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormSubmit from "../formsubmit";

const options = {
  location: ["Greece", "Other"],
  investmentInterest: [
    "Buying a property",
    "Developing a building for ROI",
    "Market analysis",
    "Business plan evaluation",
    "Other",
  ],
  buyertype: [
    "Direct buyer",
    "Real estate agent",
    "Development investor",
    "Other",
  ],
  investmentRange: ["€500K-€1M", "€1M-€2M", "€2M-€3M", "€3M+"],
  purchaseTimeline: [
    "Next 6 months",
    "6 - 12 months",
    "12 - 18 months",
    "18 - 24 months",
    "+24 months",
  ],
  previousInvestment: ["Yes", "No"],
};

export default function ClientRegistrationDetailsForm({
  clientInfo,
  action,
  id,
}) {
  const initialState = {id};
  const [state, formAction] = useFormState(action, initialState);
  const [data, setData] = useState(clientInfo.registration);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
  if (state?.success) {
    setEditable(false);
  }
}, [state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!editable) return;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const enableEditing = (event) => {
    event.preventDefault();
    setEditable(true);
  };

  const disabledEditing = (event) => {
    event.preventDefault();
    setEditable(false);
  }

  return (
    <form action={formAction} className={classes.form}>
      <div>
        <label>Are you located in Greece or a foreign country?</label>
        <FormControl fullWidth size="small" sx={{ mb: 2 }} className={classes.formControl}>
          <Select
            name="location"
            value={data.location}
            onChange={handleChange}
            displayEmpty
            disabled={!editable}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ color: "gray" }}>Select</span>
              )
            }
            sx={{ backgroundColor: "white" }}
          >
            {options.location.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <label>What type of investment interests you?</label>
        <FormControl fullWidth size="small" sx={{ mb: 2 }} className={classes.formControl}>
          <Select
            name="investmentInterest"
            value={data.investmentInterest}
            onChange={handleChange}
            displayEmpty
            disabled={!editable}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ color: "gray" }}>Select</span>
              )
            }
            sx={{ backgroundColor: "white" }}
          >
            {options.investmentInterest.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <label>
          Are you a direct buyer, real estate agent, or development investor?
        </label>
        <FormControl fullWidth size="small" sx={{ mb: 2 }} className={classes.formControl}>
          <Select
            name="buyertype"
            value={data.buyertype}
            onChange={handleChange}
            displayEmpty
            disabled={!editable}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ color: "gray" }}>Select</span>
              )
            }
            sx={{ backgroundColor: "white" }}
          >
            {options.buyertype.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <label>What is your investment range?</label>
        <FormControl fullWidth size="small" sx={{ mb: 2 }} className={classes.formControl}>
          <Select
            name="investmentRange"
            value={data.investmentRange}
            onChange={handleChange}
            displayEmpty
            disabled={!editable}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ color: "gray" }}>Select</span>
              )
            }
            sx={{ backgroundColor: "white" }}
          >
            {options.investmentRange.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* ✅ New Dropdowns Below */}
      <div>
        <label>Preferred timeline for purchase or investment?</label>
        <FormControl fullWidth size="small" sx={{ mb: 2 }} className={classes.formControl}>
          <Select
            name="purchaseTimeline"
            value={data.purchaseTimeline}
            onChange={handleChange}
            displayEmpty
            disabled={!editable}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ color: "gray" }}>Select</span>
              )
            }
            sx={{ backgroundColor: "white" }}
          >
            {options.purchaseTimeline.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <label>Have you previously invested in Greek real estate?</label>
        <FormControl fullWidth size="small" sx={{ mb: 2 }} className={classes.formControl}>
          <Select
            name="previousInvestment"
            value={data.previousInvestment}
            onChange={handleChange}
            displayEmpty
            disabled={!editable}
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ color: "gray" }}>Select</span>
              )
            }
            sx={{ backgroundColor: "white" }}
          >
            {options.previousInvestment.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {editable ? (
        <div className={`${classes.spanTwoColumns} ${classes.buttonFlex}`}>
          <div className="submitButtonContainer">
            <FormSubmit showSpinner={false}/>
          </div>
          <div className="submitButtonContainer">
            <Button variant="contained" onClick={disabledEditing}>
              Close
            </Button>
          </div>
        </div>
      ) : (
        <div className={classes.spanTwoColumns}>
          <div className="submitButtonContainer">
            <Button variant="contained" onClick={enableEditing}>
              Edit
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
