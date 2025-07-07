"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import {
  TextField,
  Box,
  Button,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import { authenticate } from "@/server/actions/authenticate/authenticate";

// Dummy FormSubmit replacement using Material UI Button
function FormSubmit({ disabled, showSpinner }) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      disabled={disabled}
      fullWidth
      sx={{ py: 1.5 }}
    >
      {showSpinner ? <CircularProgress size={24} color="inherit" /> : "Login"}
    </Button>
  );
}

function Form({ handleChange, state, formAction, isButtonDisabled }) {
  return (
    <Box
      component="form"
      action={formAction}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 2,
      }}
    >
      <TextField
        label="Username"
        name="username"
        type="text"
        fullWidth
        variant="outlined"
        onChange={handleChange}
        error={Boolean(
          state?.validationErrors?.username || state?.validationErrors?.noUser
        )}
        helperText={
          state?.validationErrors?.username
            ? "Invalid username"
            : state?.validationErrors?.noUser
            ? "Invalid credentials"
            : ""
        }
        inputProps={{ className: "mui-isolated-input" }}
        sx={{
          input: {
            backgroundColor: "transparent",
            WebkitBoxShadow: "0 0 0 1000px transparent inset",
            transition: "background-color 5000s ease-in-out 0s",
          },
        }}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        variant="outlined"
        onChange={handleChange}
        error={Boolean(
          state?.validationErrors?.password || state?.validationErrors?.noUser
        )}
        helperText={
          state?.validationErrors?.password
            ? "Invalid password"
            : state?.validationErrors?.noUser
            ? "Invalid credentials"
            : ""
        }
      />
      <div className="submit-button-container">
      <FormSubmit disabled={isButtonDisabled} showSpinner={false} />
      </div>
    </Box>
  );
}

const initialState = { errorMessage: "", errors: [], submitted: false };

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, initialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...data, [name]: value };
    setData(newData);

    // Enable button only if both fields are > 5 characters
    setIsButtonDisabled(!(newData.username.length > 5 && newData.password.length > 5));
  };

  const handleReset = () => {
    state.errorMessage = "";
    setData({ username: "", password: "" });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 400, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>

      {!state?.errorMessage ? (
        <>
          <Form
            formAction={formAction}
            state={state}
            handleChange={handleChange}
            isButtonDisabled={isButtonDisabled}
          />
          <Box sx={{ mt: 2 }}>
            <Link href="/password-reset-request" passHref legacyBehavior>
              <Typography variant="body2" component="a" color="primary">
                Forgot password?
              </Typography>
            </Link>
          </Box>
        </>
      ) : (
        <Stack spacing={2}>
          <Typography variant="h6" color="error">
            Something went wrong!
          </Typography>
          <Typography>{state.errorMessage}</Typography>
          <Button variant="contained" onClick={handleReset}>
            Try again
          </Button>
          <Link href="/" passHref legacyBehavior>
            <Typography variant="body2" component="a">
              Return to home page
            </Typography>
          </Link>
        </Stack>
      )}
    </Box>
  );
}
