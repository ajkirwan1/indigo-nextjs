// MaterialUiModal.jsx
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

export default function MaterialUiModal({ open, onClose, onConfirm }) {
  return (
    <Modal open={open} onClose={() => onClose(false)}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        border: '2px solid #000', 
        boxShadow: 24, 
        p: 4 
      }}>
        <Typography variant="h6" component="h2">
          Confirm Action
        </Typography>

        <ul style={{ paddingLeft: '20px', marginTop: 16 }}>
          <li style={{ marginBottom: 8 }}>
            <Typography component="span">
              - You are about to give this user access to files
            </Typography>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Typography component="span">
              - This action will create an account for the client
            </Typography>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Typography component="span">
              - The client will receive a confirmation email to finish creating their account
            </Typography>
          </li>
        </ul>

        <Typography sx={{ mt: 2 }}>
          Are you sure you want to proceed?
        </Typography>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 4 }}>
          <Button onClick={() => onClose(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={() => onConfirm(true)}
            sx={{ backgroundColor: '#003a4d', '&:hover': { backgroundColor: '#003a4dc7' } }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
