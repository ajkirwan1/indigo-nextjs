"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button as MUIButton,
} from "@mui/material";
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

function normalizeRegistrationData(registration) {
  return {
    location: registration.location === "Greece" ? "Greece" : "Other",

    investmentInterest: normalizeMatch(
      registration.investmentInterest,
      {
        "residential": "Buying a property",
        "roi": "Developing a building for ROI",
        "analysis": "Market analysis",
        "plan": "Business plan evaluation",
      },
      "Other"
    ),

    buyertype: normalizeMatch(
      registration.buyertype,
      {
        "private": "Direct buyer",
        "agent": "Real estate agent",
        "investor": "Development investor",
      },
      "Other"
    ),

    investmentRange: normalizeMatch(
      registration.investmentRange,
      {
        "100,000€ - 150,000€": "€500K-€1M", // You might want to refine this range mapping
      },
      "€500K-€1M" // Default/fallback
    ),

    purchaseTimeline: normalizeMatch(
      registration.purchaseTimeline,
      {
        "within 6 months": "Next 6 months",
        "6-12 months": "6 - 12 months",
        "12-18 months": "12 - 18 months",
        "18-24 months": "18 - 24 months",
        "+24 months": "+24 months",
      },
      "Next 6 months"
    ),

    previousInvestment: registration.previousInvestment?.toLowerCase() === "yes" ? "Yes" : "No",
  };
}

function normalizeMatch(input, mapping, fallback) {
  const cleaned = input?.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9€-]/gi, "");
  for (const [key, value] of Object.entries(mapping)) {
    const keyClean = key.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9€-]/gi, "");
    if (cleaned === keyClean) return value;
  }
  return fallback;
}


export default function ClientRegistrationDetailsForm({ clientInfo, action, id }) {
  const initialState = { id };
  const [state, formAction] = useFormState(action, initialState);
  const [data, setData] = useState(null); // start null to avoid wrong initial render
  const [editable, setEditable] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  console.log(clientInfo.registration, "clientInfo")


  useEffect(() => {
    if (state?.success) setEditable(false);
  }, [state]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sync data when clientInfo changes
  useEffect(() => {
    if (clientInfo?.registration) {
      const normalized = normalizeRegistrationData(clientInfo.registration);
      setData(normalized);
    }
  }, [clientInfo]);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!editable) return;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const enableEditing = () => setEditable(true);
  const disableEditing = () => setEditable(false);

  if (!data) return null;

  const fields = {
    location: "Are you located in Greece or a foreign country?",
    investmentInterest: "What type of investment interests you?",
    buyertype: "Are you a direct buyer, real estate agent, or development investor?",
    investmentRange: "What is your investment range?",
    purchaseTimeline: "Preferred timeline for purchase or investment?",
    previousInvestment: "Have you previously invested in Greek real estate?",
  };

  return (
    <Container maxWidth={false} sx={{ width: "100%", py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">
          Registration Information
        </Typography>
        {!editable ? (
            <MUIButton variant="outlined" size="small" onClick={enableEditing}>
              Edit
            </MUIButton>
          ) : (
            <MUIButton variant="outlined" size="small" onClick={disableEditing}>
              Close
            </MUIButton>
          )}
      </Box>
      <form action={formAction}>
        <Grid container spacing={3}>
          {Object.entries(fields).map(([key, label]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <FormControl fullWidth size="small" disabled={!editable}>
                <InputLabel>{label}</InputLabel>
                <Select
                  name={key}
                  value={data[key]}
                  onChange={handleChange}
                  label={label}
                  displayEmpty
                >
                  {options[key].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
        </Grid>

        {editable && (
          <Box display="flex" gap={2} mt={3}>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className="submit-button-container">
             <FormSubmit showSpinner={false} />
             </div>
            </div>
          </Box>
        )}
      </form>
    </Container>
  );
}
