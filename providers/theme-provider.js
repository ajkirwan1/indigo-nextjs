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
          [theme.breakpoints.down('xs')]: {
            width: '80%',  // <600px
          },
          [theme.breakpoints.only('sm')]: {
            width: '70%',   // 600px - 899px
          },
          [theme.breakpoints.only('md')]: {
            width: '50%',   // 900px - 1199px
          },
          [theme.breakpoints.only('lg')]: {
            width: '80%',   // 1200px - 1535px
          },
          [theme.breakpoints.up('xl')]: {
            width: '80%',   // >=1536px
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
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '1rem', // fallback/default
    
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
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          fontSize: '1rem', // default fallback
    
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
      
  },
});

export default theme;
