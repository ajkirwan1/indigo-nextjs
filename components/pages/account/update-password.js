'use client'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Snackbar,
    CircularProgress,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  
  export default function ResetPasswordDialog() {
    const [open, setOpen] = useState(false);
    const [fields, setFields] = useState({ current: "", newPass: "", confirm: "" });
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  
    const handleChange = (e) => {
      setFields({ ...fields, [e.target.name]: e.target.value });
    };
  
    const handleReset = async () => {
      const { current, newPass, confirm } = fields;
      if (!current || !newPass || !confirm) {
        setSnackbar({ open: true, message: "All fields are required.", severity: "error" });
        return;
      }
      if (newPass !== confirm) {
        setSnackbar({ open: true, message: "Passwords do not match.", severity: "error" });
        return;
      }
  
      setLoading(true);
      try {
        // Replace with your actual API call:
        await new Promise((r) => setTimeout(r, 2000));
        setSnackbar({ open: true, message: "Password reset successfully.", severity: "success" });
        setOpen(false);
      } catch (err) {
        setSnackbar({ open: true, message: "Failed to reset password.", severity: "error" });
      } finally {
        setLoading(false);
        setFields({ current: "", newPass: "", confirm: "" });
      }
    };
  
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Reset Password
        </Button>
  
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Reset Your Password</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField
              type="password"
              label="Current Password"
              name="current"
              value={fields.current}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              type="password"
              label="New Password"
              name="newPass"
              value={fields.newPass}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              type="password"
              label="Confirm New Password"
              name="confirm"
              value={fields.confirm}
              onChange={handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} disabled={loading}>Cancel</Button>
            <Button
              variant="contained"
              onClick={handleReset}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={18} /> : null}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </DialogActions>
        </Dialog>
  
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          message={snackbar.message}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </>
    );
  }
  