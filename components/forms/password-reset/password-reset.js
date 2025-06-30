'use client'

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';

const mockCheckEmail = async (email) => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const existingEmails = ['user@example.com', 'admin@example.com'];
      resolve(existingEmails.includes(email.toLowerCase()));
    }, 1000);
  });
};

const ResetRequestForm = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address.',
        severity: 'error',
      });
      return;
    }

    setSubmitting(true);
    const exists = await mockCheckEmail(email);
    setSubmitting(false);

    if (exists) {
      setSnackbar({
        open: true,
        message: 'Password reset email sent if this account exists.',
        severity: 'success',
      });
    } else {
      setSnackbar({
        open: true,
        message: 'This email is not registered.',
        severity: 'error',
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        // maxWidth: 400,
        // mx: 'auto',
        // mt: 8,
        // p: 4,
        // borderRadius: 2,
        // boxShadow: 3,
        // bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" mb={2}>
        Reset Your Password
      </Typography>

      <TextField
        label="Email Address"
        type="email"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
        inputProps={{ className: "mui-isolated-input" }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={submitting}
        endIcon={submitting && <CircularProgress size={20} />}
      >
        Send Reset Link
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ResetRequestForm;
