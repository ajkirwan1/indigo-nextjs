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
import { useMediaQuery, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import classes from "./register-form.module.css"; // <-- Import shared styles
import { useTheme } from "@mui/material/styles";

export default function RegisterFormPage1({ magicLinkRecord }) {
  const initialState = {
    errorMessage: "",
    errors: {},
    magicLinkRecord: magicLinkRecord,
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, formAction] = useFormState(NewUserSignUp, initialState);
  // const [errors, setErrors] = useState([]);
  // New state to track password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleShowPassword = () => setShowPassword((show) => !show);
  const toggleShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);
  // if (errors[0]?.dbErrorMessage) {
  //   return (
  //     <>
  //       <div className={classes.headerContainer}>
  //         <h1>REGISTER</h1>
  //         <Image className={classes.iconRegister} src={userIcon} alt="User icon" />
  //       </div>
  //       <Typography color="error" sx={{ mt: 2, mb: 2 }}>
  //         {errors[0].dbErrorMessage}
  //       </Typography>
  //       <Box sx={{ mb: 2 }}>
  //         <Button variant="contained" onClick={handleReset}>
  //           Try again
  //         </Button>
  //       </Box>
  //       <Link href="/" passHref legacyBehavior>
  //         <Button variant="text" color="primary">
  //           Return to homepage
  //         </Button>
  //       </Link>
  //     </>
  //   );
  // }
  return (
    <>
      <div className={classes.headerContainer}>
        <h1>REGISTER</h1>
        <Image className={classes.iconRegister} src={userIcon} alt="User icon" />
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form action={formAction} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                // {...(isMobile
                //   ? { placeholder: "Username" }
                //   : {
                //       label: "Username",
                //     })}
                placeholder="Username"
                name="userName"
                type="text"
                error={!!state.errors?.userName}
                helperText={state.errors?.userName || ""}
                inputProps={{ className: "mui-isolated-input" }}
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f4f4f4',
                  },
                  width: {
                    xs: '80%',
                    sm: '90%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%',
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                // {...(isMobile
                //   ? { placeholder: "Email" }
                //   : {
                //       label: "Email",
                //     })}
                placeholder="Email"
                name="email"
                type="email"
                value={magicLinkRecord.email}
                InputProps={{ readOnly: true }}
                error={!!state.errors?.email}
                helperText={state.errors?.email || ""}
                inputProps={{ className: "mui-isolated-input" }}
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f4f4f4',
                  },
                  width: {
                    xs: '80%',
                    sm: '90%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%',
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                // {...(isMobile
                //   ? { placeholder: "Password" }
                //   : {
                //       label: "Password",
                //     })}
                placeholder="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                error={!!state.errors?.password}
                helperText={state.errors?.password || ""}
                inputProps={{ className: "mui-isolated-input" }}
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f4f4f4',
                  },
                  width: {
                    xs: '80%',
                    sm: '90%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%',
                  },
                }}
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
                  className: "mui-isolated-input",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                // {...(isMobile
                //   ? { placeholder: "Confirm Password" }
                //   : {
                //       label: "Confirm Password",
                //     })}
                name="passwordConfirm"
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="Confirm password"
                error={!!state.errors?.passwordConfirm}
                helperText={state.errors?.passwordConfirm || ""}
                inputProps={{ className: "mui-isolated-input" }}
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f4f4f4',
                  },
                  width: {
                    xs: '80%',
                    sm: '90%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={toggleShowPasswordConfirm}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                        aria-label={showPasswordConfirm ? "Hide password" : "Show password"}
                      >
                        {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  className: "mui-isolated-input",
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <div className={classes.buttonWrapper}>
              <div className="submit-button-container">
                <FormSubmit />
              </div>
            </div>
          </Box>
          {!!state.errors?.existingUserError && (
            <Typography
              color="error"
              sx={{
                mb: 1,
                fontSize: {
                  xs: "0.8rem", // smaller on extra-small (mobile) screens
                  sm: "1rem", // normal size on small and up
                },
              }}
            >
              There is an error with some of your submission details.
            </Typography>
          )}
        </form>
      </Box>
    </>
  );
}
