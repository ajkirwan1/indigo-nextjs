'use client';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  CircularProgress,
  Alert,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { z } from 'zod';
import { passwordSchema } from '@/utils/validation/zod/password-schema';
import { updatePasswordByUserId } from '@/lib/api/update-password';

// Schema for reset password form using imported passwordSchema
const resetPasswordSchema = z
  .object({
    current: passwordSchema.min(1, 'Current password is required'),
    newPass: passwordSchema,
    confirm: z.string().min(1, 'Please confirm your new password'),
  })
  .refine((data) => data.newPass === data.confirm, {
    message: "Passwords do not match",
    path: ['confirm'],
  });

export default function ResetPasswordDialog({ userId }) {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });
  const [errors, setErrors] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    newPass: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleReset = async () => {
    const validationResult = resetPasswordSchema.safeParse(fields);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      setErrors({
        current: fieldErrors.current?.[0] || '',
        newPass: fieldErrors.newPass?.[0] || '',
        confirm: fieldErrors.confirm?.[0] || '',
      });
      return;
    }

    setErrors({ current: '', newPass: '', confirm: '' });
    setLoading(true);

    try {
      const updatePasswordResult = await updatePasswordByUserId(userId, fields.newPass);

      if (!updatePasswordResult.success) {
        setSnackbar({
          open: true,
          message: updatePasswordResult.errorMessage || 'Failed to reset password.',
          severity: 'error',
        });
        setLoading(false);
        return;
      }

      setSnackbar({
        open: true,
        message: 'Password reset successfully.',
        severity: 'success',
      });
      setOpen(false);
      setFields({ current: '', newPass: '', confirm: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to reset password.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Reset Password
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Reset Your Password</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 1,
            pt: '16px !important',
          }}
        >
          <TextField
            type={showPassword.current ? 'text' : 'password'}
            label="Current Password"
            name="current"
            value={fields.current}
            onChange={handleChange}
            fullWidth
            error={!!errors.current}
            helperText={errors.current}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => toggleVisibility('current')}
                    edge="end"
                    aria-label="toggle current password visibility"
                  >
                    {showPassword.current ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{ className: 'mui-isolated-input' }}
          />

          <TextField
            type={showPassword.newPass ? 'text' : 'password'}
            label="New Password"
            name="newPass"
            value={fields.newPass}
            onChange={handleChange}
            fullWidth
            error={!!errors.newPass}
            helperText={errors.newPass}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => toggleVisibility('newPass')}
                    edge="end"
                    aria-label="toggle new password visibility"
                  >
                    {showPassword.newPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{ className: 'mui-isolated-input' }}
          />

          <TextField
            type={showPassword.confirm ? 'text' : 'password'}
            label="Confirm New Password"
            name="confirm"
            value={fields.confirm}
            onChange={handleChange}
            fullWidth
            error={!!errors.confirm}
            helperText={errors.confirm}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => toggleVisibility('confirm')}
                    edge="end"
                    aria-label="toggle confirm password visibility"
                  >
                    {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{ className: 'mui-isolated-input' }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleReset}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={18} /> : null}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
