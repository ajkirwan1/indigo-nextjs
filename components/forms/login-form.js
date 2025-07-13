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
  useMediaQuery,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { authenticate } from "@/server/actions/authenticate/authenticate";

function FormSubmit({ disabled, showSpinner }) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      disabled={disabled}
      fullWidth
    >
      {showSpinner ? <CircularProgress size={24} color="inherit" /> : "Login"}
    </Button>
  );
}

function Form({ handleChange, state, formAction, isButtonDisabled }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // New state for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((show) => !show);

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
        // {...(isMobile
        //   ? { placeholder: "Username" }
        //   : {
        //       label: "Username",
        //       // InputLabelProps: { shrink: true },
        //     })}
        placeholder= "Username"
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
      />

      <TextField
        // {...(isMobile
        //   ? { placeholder: "Password" }
        //   : {
        //       label: "Password",
        //       // InputLabelProps: { shrink: true },
        //     })}
        placeholder= "Password"
        name="password"
        type={showPassword ? "text" : "password"} // toggle type here
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={toggleShowPassword}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputProps={{ className: "mui-isolated-input" }}
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
    setIsButtonDisabled(
      !(newData.username.length > 5 && newData.password.length > 5)
    );
  };

  const handleReset = () => {
    state.errorMessage = "";
    setData({ username: "", password: "" });
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: { xs: 0, sm: "auto" }, // No margin on mobile, center on larger screens
        width: { xs: "100%", sm: "80%" }, // Full width on mobile
      }}
    >
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
