"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Grid, TextField, Typography, Checkbox, FormControlLabel, CircularProgress, Button, useMediaQuery } from "@mui/material";
import userIcon from "/public/images/icons/add-user.png";
import { Spinner } from "@nextui-org/spinner"; // Optional: replace with CircularProgress
import RegistrationButton from "@/components/ui/buttons/registration-button";
import { RegisterEmail } from "@/lib/register-email";
import { RegisterUser } from "@/server/actions/db/regsiter/register-user";
import classes from "./register-form.module.css"
import { useTheme } from "@mui/material/styles";

export default function RegisterFormPage3New({
  handlePreviousTab,
  data,
  handleChange,
  handleError,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
    <>
      <div className={classes.headerContainer}>
      <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="User icon" />
        </div>
      <form noValidate>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...(isMobile
                ? { placeholder: "Company or personal name" }
                : {
                    label: "Company or personal name",
                  })}
              name="companyName"
              type="text"
              value={data.companyName}
              onChange={handleChange}
              error={!!errors.companyName}
              helperText={errors.companyName || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f4f4f4', // your desired color
                },
                width: {
                  xs: '80%',    // default on mobile
                  sm: '90%',     // ≥600px
                  md: '90%',     // ≥900px
                  lg: '90%',     // ≥1200px
                  xl: '90%',     // ≥1536px
                },
              }}
            />
          </Grid>

          {/* Telephone */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...(isMobile
                ? { placeholder: "Telephone number" }
                : {
                    label: "Telephone number",
                  })}
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f4f4f4', // your desired color
                },
                width: {
                  xs: '80%',    // default on mobile
                  sm: '90%',     // ≥600px
                  md: '90%',     // ≥900px
                  lg: '90%',     // ≥1200px
                  xl: '90%',     // ≥1536px
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...(isMobile
                ? { placeholder: "Email Address" }
                : {
                    label: "Email Address",
                    // InputLabelProps: { shrink: true },
                  })}
              name="email"
              value={data.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f4f4f4', // your desired color
                },
                width: {
                  xs: '80%',    // default on mobile
                  sm: '90%',     // ≥600px
                  md: '90%',     // ≥900px
                  lg: '90%',     // ≥1200px
                  xl: '90%',     // ≥1536px
                },
              }}
              
            />
          </Grid>

          {/* Confirm Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...(isMobile
                ? { placeholder: "Confirm email Address" }
                : {
                    label: "Confirm email Address",
                    // InputLabelProps: { shrink: true },
                  })}
              name="confirmEmail"
              value={data.confirmEmail}
              onChange={handleChange}
              error={!!errors.confirmEmail}
              helperText={errors.confirmEmail || ""}
              size="small"
              inputProps={{ className: "mui-isolated-input" }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f4f4f4', // your desired color
                },
                width: {
                  xs: '80%',    // default on mobile
                  sm: '90%',     // ≥600px
                  md: '90%',     // ≥900px
                  lg: '90%',     // ≥1200px
                  xl: '90%',     // ≥1536px
                },
              }}
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
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <div className={classes.buttonWrapper}>
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
          </div>
        </Box>
      </form>
    </>
  );
}
