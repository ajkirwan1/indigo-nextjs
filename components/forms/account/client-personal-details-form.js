/** @format */
"use client";

import { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Button as MUIButton,
  Box,
} from "@mui/material";
import ValidatePersonalDetails from "@/utils/validate-personal-details";
import Button from "@/components/ui/button";
import { updateUserPersonalInfo } from "@/server/actions/db/admin/update-user-personal-info";

export default function ClientPersonalDetailsForm({
  username = "",
  firstname = "",
  email = "",
  phonenumber = "",
  id,
}) {
  const [data, setData] = useState({
    userName: username ?? "",
    email: email ?? "",
    firstName: firstname ?? "",
    phoneNumber: phonenumber ?? "",
  });

  const [formDisabled, setFormDisabled] = useState(true);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (formDisabled) {
      setErrors([{ disabledError: true }]);
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleEnable = () => {
    setFormDisabled(false);
    setErrors([{ disabledError: false }]);
  };

  const handleReset = () => {
    setData({
      userName: username ?? "",
      email: email ?? "",
      firstName: firstname ?? "",
      phoneNumber: phonenumber ?? "",
    });
    setErrors([]);
    setFormDisabled(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const validateResult = ValidatePersonalDetails(data);
    setLoading(false);

    if (validateResult?.errors) {
      setErrors([...validateResult.errors]);
      return;
    }

    const submitResult = await updateUserPersonalInfo(data, id);

    console.log(submitResult, "HHHHHHHHHH")

    if (submitResult?.dbError || submitResult?.success === false) {
      setErrors([{ ...submitResult }]);
    } else {
      setData({
        userName: submitResult?.data?.userName ?? "",
        firstName: submitResult?.data?.firstName ?? "",
        email: submitResult?.data?.email ?? "",
        phoneNumber: submitResult?.data?.phoneNumber ?? "",
      });
      setErrors([]);
      setFormDisabled(true);
    }
  };

  const handleRetry = () => {
    setData({
      userName: username ?? "",
      email: email ?? "",
      firstName: firstname ?? "",
      phoneNumber: phonenumber ?? "",
    });
    setErrors([]);
  };

  const getError = (type) => errors?.find((e) => e.errorType === type);

  return (
    <Box sx={{ p: 3 }}>
      {errors[0]?.dbError || errors[0]?.errorMessage ? (
        <Box>
          <Typography color="error" variant="body1" gutterBottom>
            An error occurred submitting your update. Our records have not been updated.
          </Typography>
          <Box mt={2}>
            <Button onClick={handleRetry}>Try again</Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5">Personal Details</Typography>
            {formDisabled ? (
              <MUIButton variant="outlined" size="small" onClick={handleEnable}>
                Edit
              </MUIButton>
            ) : (
              <MUIButton variant="outlined" size="small" onClick={handleReset}>
                Close
              </MUIButton>
            )}
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="userName"
                label="User name"
                placeholder={username}
                value={data.userName ?? ""}
                onChange={handleChange}
                disabled={formDisabled}
                error={!!getError("username")}
                helperText={getError("username") && "Invalid user name"}
                inputProps={{ className: "mui-isolated-input" }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="firstName"
                label="Name"
                placeholder={firstname}
                value={data.firstName ?? ""}
                onChange={handleChange}
                disabled={formDisabled}
                error={!!getError("firstname")}
                helperText={getError("firstname") && "Invalid first name"}
                inputProps={{ className: "mui-isolated-input" }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                placeholder={email}
                value={data.email ?? ""}
                onChange={handleChange}
                disabled={formDisabled}
                error={!!getError("email")}
                helperText={getError("email") && "Invalid email"}
                inputProps={{ className: "mui-isolated-input" }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone number"
                placeholder={phonenumber}
                value={data.phoneNumber ?? ""}
                onChange={handleChange}
                disabled={formDisabled}
                error={!!getError("phonenumber")}
                helperText={getError("phonenumber") && "Invalid phone number"}
                inputProps={{ className: "mui-isolated-input" }}
              />
            </Grid>
          </Grid>

          <Box mt={3}>
            {errors[0]?.disabledError && (
              <Typography color="warning.main" variant="body2" mb={2}>
                Form is disabled. Click Edit to update your details.
              </Typography>
            )}
            {!formDisabled && (
              <div className="submit-button-container">
                <Button onClick={handleSubmit}>
                  {loading ? "Saving..." : "Submit"}
                </Button>
              </div>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
