'use client'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Snackbar,
    CircularProgress,
  } from '@mui/material';
import { useState } from 'react';
  
  export default function DeleteAccountDialog() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  
    const handleDelete = async () => {
      setLoading(true);
      try {
        // Simulate delete request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSnackbar({ open: true, message: 'Your account has been deleted.', severity: 'success' });
        setOpen(false);
      } catch (error) {
        setSnackbar({ open: true, message: 'Error deleting account.', severity: 'error' });
      } finally {
        setLoading(false);
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
  
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          message={snackbar.message}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </>
    );
  }
  