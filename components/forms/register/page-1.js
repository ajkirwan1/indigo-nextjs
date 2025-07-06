"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewUserSignUp } from "@/server/actions/registration/new-user-signup";
import { useFormState } from "react-dom";
import userIcon from "/public/images/icons/add-user.png";
import FormSubmit from "../formsubmit";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RegisterFormPage1({ magicLinkRecord }) {
  const initialState = {
    errorMessage: "",
    errors: [],
    magicLinkRecord: magicLinkRecord,
  };

  const [errors, setErrors] = useState([]);
  const [state, formAction] = useFormState(NewUserSignUp, initialState);

  const handleReset = () => {
    setErrors([]);
  };

  if (errors[0]?.dbErrorMessage) {
    return (
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 6,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          REGISTER
        </Typography>
        <Image src={userIcon} alt="User icon" width={64} height={64} />
        <Typography color="error" sx={{ mt: 2, mb: 2 }}>
          {errors[0].dbErrorMessage}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained" onClick={handleReset}>
            Try again
          </Button>
        </Box>
        <Link href="/" passHref legacyBehavior>
          <Button variant="text" color="primary">
            Return to homepage
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        mt: 4,
        px: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          REGISTER
        </Typography>
        <Image src={userIcon} alt="User icon" width={32} height={32} />
      </Box>

      <form action={formAction} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="User name"
              name="userName"
              type="text"
              placeholder="User name"
              error={!!state.errors.userName}
              helperText={state.errors.userName || ""}
              inputProps={{ className: "mui-isolated-input" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={magicLinkRecord.email}
              InputProps={{
                readOnly: true,
              }}
              error={!!state.errors.email}
              helperText={state.errors.email || ""}
              inputProps={{ className: "mui-isolated-input" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              error={!!state.errors.password}
              helperText={state.errors.password || ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirm password"
              name="passwordConfirm"
              type="password"
              placeholder="Confirm password"
              error={!!state.errors.passwordConfirm}
              helperText={state.errors.passwordConfirm || ""}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <div className="submit-button-container">
          <FormSubmit />
          </div>        
        </Box>
      </form>
    </Box>
  );
}
