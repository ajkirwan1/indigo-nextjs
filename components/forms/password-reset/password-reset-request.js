'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { SubmitNewPassword } from '@/server/actions/db/client/submit-new-password';

const PasswordResetRequestResetForm = ({ token }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      return setSnackbar({
        open: true,
        message: 'Please fill in both fields.',
        severity: 'error',
      });
    }

    if (password !== confirmPassword) {
      return setSnackbar({
        open: true,
        message: 'Passwords do not match.',
        severity: 'error',
      });
    }

    if (password.length < 8) {
      return setSnackbar({
        open: true,
        message: 'Password must be at least 8 characters.',
        severity: 'error',
      });
    }

    setSubmitting(true);
    const response = await SubmitNewPassword(token, password);
    setSubmitting(false);

    if (response.success) {
      setShowSuccessModal(true);
    } else {
      setSnackbar({
        open: true,
        message: response.errorMessage || 'Failed to reset password.',
        severity: 'error',
      });
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" mb={2}>
          Set a New Password
        </Typography>

        <TextField
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{ className: 'mui-isolated-input' }}
        />

        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{ className: 'mui-isolated-input' }}
        />

        <div className="submit-button-container">
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={submitting}
            endIcon={submitting && <CircularProgress size={20} />}
          >
            Reset
          </Button>
        </div>

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

      {/* ✅ Success Modal */}
      <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <DialogTitle>Password Reset Successful</DialogTitle>
        <DialogContent>
          <Typography>Your password has been updated. You can now log in with your new password.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => router.push('/login')} variant="contained">
            Go to Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PasswordResetRequestResetForm;
