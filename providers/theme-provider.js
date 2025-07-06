// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003a4d', // Custom blue
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#003a4d',
            },
            '&:hover fieldset': {
              borderColor: '#007BFF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#003a4d',
            },
            '& input': {
              cursor: 'pointer',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#003a4d',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#003a4d',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#003a4d',
          textTransform: 'none',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#003a4dc7',
          },
        },
      },
    },
  },
});

export default theme;
