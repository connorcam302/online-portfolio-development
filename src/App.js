import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import HomeAnimation from './components/HomeAnimation';
import NavHeader from './components/NavHeader';
import ProjectThumbnail from './components/ProjectThumbnail';

const THEME = createTheme({
  typography: {
   "fontFamily": `"Montserrat"`,
   "fontSize": 24,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500,
  button: {
  textTransform: 'none'
  }
  },
  palette: {
      php: "red",
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
      <div className='animationContainer'>
        <HomeAnimation className='animationContainer'/>
      </div>
      {/* <ProjectThumbnail name="Academic Paper Search"/> */}
      <ScrollMenu className="projectCarosel">
        <ProjectThumbnail name="Academic Paper Search" php="true" api="true" react="true"/>
        <ProjectThumbnail name="Academic Paper Search"/>
        <ProjectThumbnail name="Academic Paper Search"/>
        <ProjectThumbnail name="Academic Paper Search"/>
        <ProjectThumbnail name="Academic Paper Search"/>
        <ProjectThumbnail name="Academic Paper Search"/>
    </ScrollMenu>
    </ThemeProvider>
  </div>
  );
}

export default App;