import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8a8c65',
    },
    secondary: {
      main: '#a05e45',
    },
    background: {
      default: '#f8edeb',
      paper: 'background.default',
    },
    text: {
      primary: '#2C3333',
      secondary: '#4a4b36',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    
    h1: { fontFamily: '"Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'italic' },
    h2: { fontFamily: '"Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'italic' },
    h3: { fontFamily: '"Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'italic' },
    h4: { fontFamily: '"Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'italic' },
    h5: { fontFamily: '"Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'italic' },
    h6: { fontFamily: '"Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'italic' },
    
    body1: { 
      lineHeight: 1.7,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          padding: '10px 28px',
          fontWeight: 'bold', 
        },
      },
    },
  },
});