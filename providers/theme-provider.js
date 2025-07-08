// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003a4d', // Custom blue
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.only('xs')]: {
            width: '60%',
          },
          [theme.breakpoints.only('sm')]: {
            width: '70%',
          },
          [theme.breakpoints.only('md')]: {
            width: '80%',
          },
          [theme.breakpoints.only('lg')]: {
            width: '70%',
          },
          [theme.breakpoints.up('xl')]: {
            width: '80%',
          },
        }),
      },
    },

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

    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) => ({
          fontSize: '14px',
          [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '16px',
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '14px',
          [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '16px',
          },
        }),
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '12px',
          [theme.breakpoints.up('sm')]: {
            fontSize: '13px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '14px',
          },
        }),
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '1rem',
          [theme.breakpoints.only('xs')]: {
            fontSize: '0.85rem',
          },
          [theme.breakpoints.only('sm')]: {
            fontSize: '0.9rem',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
          },
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          fontSize: '1rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.85rem',
          },
          [theme.breakpoints.only('sm')]: {
            fontSize: '0.9rem',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
          },
        }),
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
