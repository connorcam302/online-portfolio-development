import React from 'react';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import HomeAnimation from './components/HomeAnimation';
import NavHeader from './components/NavHeader';

const THEME = createTheme({
  typography: {
   "fontFamily": `"Montserrat"`,
   "fontSize": 20,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500,
   button: {
    textTransform: 'none'
    }
  }
});

function App() {
  return (
  <div>
    <ThemeProvider theme={THEME}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
      <NavHeader />
      <HomeAnimation />
    </ThemeProvider>
  </div>
  );
}

export default App;