'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GetUserNewIdByEmail } from '@/server/actions/db/client/get-user-id-by-email';
import { SendMagicLinkPasswordReset } from '@/server/actions/db/client/send-magic-link-password-reset';

export default function ResetRequestForm() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    const userResponse = await GetUserNewIdByEmail(email);
    if (!userResponse.success) {
      setErrorMessage(userResponse.errorMessage || 'This email is not registered.');
      setSubmitting(false);
      return;
    }

    const resetResponse = await SendMagicLinkPasswordReset(email, userResponse.userId);
    setSubmitting(false);

    if (resetResponse.success) {
      setSuccessMessage('Password reset email sent if this account exists.');
    } else {
      setErrorMessage(resetResponse.errorMessage || 'Failed to send password reset email.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mx: { xs: 0, sm: 'auto' },
        px: { xs: 2, sm: 0 },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Reset Your Password
      </Typography>

      <TextField
        {...(isMobile
          ? { placeholder: 'Email Address' }
          : { label: 'Email Address' })}
        type="email"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        error={Boolean(errorMessage)}
        helperText={errorMessage || ''}
        sx={{
          [theme.breakpoints.down('sm')]: {
            width: '100% !important',
          },
        }}
        inputProps={{ className: 'mui-isolated-input' }}
      />

      {successMessage && (
        <Typography variant="body2" color="success.main" textAlign="center">
          {successMessage}
        </Typography>
      )}

      <div className="submit-button-container">
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={submitting}
          endIcon={submitting && <CircularProgress size={20} />}
        >
          {submitting ? 'Sending...' : 'Send Reset'}
        </Button>
      </div>
    </Box>
  );
}
