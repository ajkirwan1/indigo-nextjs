"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Grid, TextField, Typography, Checkbox, FormControlLabel, CircularProgress, Button } from "@mui/material";
import userIcon from "/public/images/icons/add-user.png";
import { Spinner } from "@nextui-org/spinner"; // Optional: replace with CircularProgress
import RegistrationButton from "@/components/ui/buttons/registration-button";
import { RegisterEmail } from "@/lib/register-email";
import { RegisterUser } from "@/server/actions/db/regsiter/register-user";

export default function RegisterFormPage3New({
  handlePreviousTab,
  data,
  handleChange,
  handleError,
}) {
  const [errors, setErrors] = useState({});
  const [tickboxSelected, setTickboxSelected] = useState(false);
  const [submitPending, setSubmitPending] = useState(false);

  const handleCheckBox = () => {
    setTickboxSelected((val) => !val);
  };

  const handleSubmitForm = async () => {
    setErrors({});
    setSubmitPending(true);

    const submitResult = await RegisterUser(data);

    if (submitResult.dbError) {
      handleError(submitResult.dbError);
    }

    if (submitResult?.success) {
      const registerEmail = await RegisterEmail(data);
      if (registerEmail?.emailSubmissionError) {
        handleError(registerEmail.emailSubmissionError);
      }
    } else {
      setErrors({ ...submitResult });
    }

    setSubmitPending(false);
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 4, px: 2 }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          REGISTER
        </Typography>
        <Image src={userIcon} alt="User icon" width={32} height={32} />
      </Box>

      {/* Form */}
      <form noValidate>
        <Grid container spacing={2}>
          {/* Company Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company or personal name"
              name="companyName"
              value={data.companyName}
              onChange={handleChange}
              error={!!errors.companyName}
              helperText={errors.companyName || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
            />
          </Grid>

          {/* Telephone */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Telephone number"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email address"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
            />
          </Grid>

          {/* Confirm Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirm email address"
              name="confirmEmail"
              value={data.confirmEmail}
              onChange={handleChange}
              error={!!errors.confirmEmail}
              helperText={errors.confirmEmail || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
            />
          </Grid>

          {/* Checkbox */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tickboxSelected}
                  onChange={handleCheckBox}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  I agree to receive communications, updates, and promotional
                  information from Indigo Consulting. I understand that I can
                  unsubscribe at any time.
                </Typography>
              }
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
          {submitPending ? (
            <CircularProgress color="primary" size={28} />
          ) : (
            <>
              <RegistrationButton onClick={handlePreviousTab}>
                Previous
              </RegistrationButton>
              <RegistrationButton
                disabled={!tickboxSelected}
                onClick={handleSubmitForm}
              >
                Submit
              </RegistrationButton>
            </>
          )}
        </Box>
      </form>
    </Box>
  );
}
