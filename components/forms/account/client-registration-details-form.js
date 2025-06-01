/** @format */

"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import classes from "./client-registration-details-form.module.css";
import Button from "@/components/ui/button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const originalOptions = {
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
  const initialState = {};
  const [state, formAction] = useFormState(action, initialState);
  const [data, setData] = useState(clientInfo.registration);
  const [editable, setEditable] = useState(false);

  const [dropdownOptions, setDropdownOptions] = useState({
    location: [clientInfo.registration.location],
    investmentInterest: [clientInfo.registration.investmentInterest],
    buyerType: [clientInfo.registration.buyertype],
    investmentRange: [clientInfo.registration.investmentRange],
    purchaseTimeline: [clientInfo.registration.purchaseTimeline],
    previousInvestment: [clientInfo.registration.previousInvestment],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!editable) return;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const enableEditing = (event) => {
    event.preventDefault();
    setEditable(true);
    // setDropdownOptions(originalOptions);
  };

  return (
    <form action={formAction}>
      <label>Are you located in Greece or a foreign country?</label>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <Select
          name="location"
          value={data.location}
          onChange={handleChange}
          displayEmpty
          disabled={!editable}
          renderValue={(selected) =>
            selected ? selected : <span style={{ color: "gray" }}>Select</span>
          }
          sx={{ backgroundColor: "white" }}
        >
          {dropdownOptions.location.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <label>What type of investment interests you?</label>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <Select
          name="investmentInterest"
          value={data.investmentInterest}
          onChange={handleChange}
          displayEmpty
          disabled={!editable}
          renderValue={(selected) =>
            selected ? selected : <span style={{ color: "gray" }}>Select</span>
          }
          sx={{ backgroundColor: "white" }}
        >
          {dropdownOptions.investmentInterest.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <label>
        Are you a direct buyer, real estate agent, or development investor?
      </label>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <Select
          name="buyerType"
          value={data.buyertype}
          onChange={handleChange}
          displayEmpty
          disabled={!editable}
          renderValue={(selected) =>
            selected ? selected : <span style={{ color: "gray" }}>Select</span>
          }
          sx={{ backgroundColor: "white" }}
        >
          {dropdownOptions.buyerType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* ✅ New Dropdowns Below */}

      <label>What is your investment range?</label>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <Select
          name="investmentRange"
          value={data.investmentRange}
          onChange={handleChange}
          displayEmpty
          disabled={!editable}
          renderValue={(selected) =>
            selected ? selected : <span style={{ color: "gray" }}>Select</span>
          }
          sx={{ backgroundColor: "white" }}
        >
          {dropdownOptions.investmentRange.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <label>Preferred timeline for purchase or investment?</label>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <Select
          name="purchaseTimeline"
          value={data.purchaseTimeline}
          onChange={handleChange}
          displayEmpty
          disabled={!editable}
          renderValue={(selected) =>
            selected ? selected : <span style={{ color: "gray" }}>Select</span>
          }
          sx={{ backgroundColor: "white" }}
        >
          {dropdownOptions.purchaseTimeline.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <label>Have you previously invested in Greek real estate?</label>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <Select
          name="previousInvestment"
          value={data.previousInvestment}
          onChange={handleChange}
          displayEmpty
          disabled={!editable}
          renderValue={(selected) =>
            selected ? selected : <span style={{ color: "gray" }}>Select</span>
          }
          sx={{ backgroundColor: "white" }}
        >
          {dropdownOptions.previousInvestment.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={enableEditing}>
        Edit
      </Button>
    </form>
  );
}
