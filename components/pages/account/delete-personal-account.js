'use client';
import { signOut } from 'next-auth/react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { deleteAccountByRegistrationId } from '@/lib/api/delete-account';

export default function DeleteAccountDialog({ registrationId}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const result = await deleteAccountByRegistrationId(registrationId);

       const token = result?.token;

      if (!result?.success) {
        console.error('Account deletion failed:', result?.errorCode, result?.errorMessage);
        return; // Optionally show error message to user
      }

      await signOut({ callbackUrl: `/account-delete-success?token=${token}` });

    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
        Delete My Account
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            This action is <strong>permanent</strong> and cannot be undone.
          </Typography>
          <Typography variant="body2">
            Are you sure you want to delete your account?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleDelete}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={18} /> : null}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
