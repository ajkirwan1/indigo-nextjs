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
          height: '36px',
          padding: '10px 10px',
          backgroundColor: 'transparent',
          WebkitBoxShadow: '0 0 0 1000px transparent inset',
          transition: 'background-color 5000s ease-in-out 0s',
          [theme.breakpoints.up('sm')]: {
            height: 'auto',
            padding: undefined,
            fontSize: '15px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '16px',
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: ({ theme }) => ({
          [theme.breakpoints.down('sm')]: {
            height: '26px',
            padding: '3px 10px',
          },
          [theme.breakpoints.up('sm')]: {
            height: 'auto',
            padding: '14px 14px', // MUI default for outlined variant
          },
          backgroundColor: 'transparent',
          WebkitBoxShadow: '0 0 0 1000px transparent inset',
          transition: 'background-color 5000s ease-in-out 0s',
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: ({ theme }) => ({
          // fontSize: '12px',
          color: '#4a4a4a', // default color
          // lineHeight: 1.5,

          [theme.breakpoints.down('sm')]: {
            fontSize: '10px',
            lineHeight: 1.3,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '14px',
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
          [theme.breakpoints.down('sm')]: {
            letterSpacing: '0.5px', // adjust as needed
            lineHeight:1
          },
              // Specific styles when in error state
        '&.Mui-error': {
          color: '#d32f2f', // or your custom red
          fontWeight: 100,
          margin: 0,

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
        root: ({ theme }) => ({
          backgroundColor: '#003a4d',
          textTransform: 'none',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#003a4dc7',
          },
    
          // Default (xs/mobile)
          paddingTop: '6px',
          paddingBottom: '6px',
    
          // Slightly larger on tablets
          [theme.breakpoints.up('sm')]: {
            paddingTop: '10px',
            paddingBottom: '10px',
          },
    
          // Even larger on desktops
          [theme.breakpoints.up('md')]: {
            paddingTop: '10px',
            paddingBottom: '10px',
          },
        }),
      },
    },
    
  },
});

export default theme;
