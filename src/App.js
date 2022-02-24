import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { Box, Typography } from '@mui/material/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import HomeAnimation from './components/HomeAnimation';
import NavHeader from './components/NavHeader';
import ProjectThumbnail from './components/ProjectThumbnail';

import AcademicPaperLibrary from './img/academicpaperlibrary.png'
import WildfireDetection from './img/wildfiredetection.png'
import FutoshikiGeneration from './img/futoshikigeneration.png'
import HandwrittenDigitRecognition from './img/handwrittendigitrecognition.png'


const THEME = createTheme({
  typography: {
   "fontFamily": `"Montserrat"`,
   "fontSize": 24,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500,
  }
});

function App() {

  return (
  <div className="pageContent">
    <ThemeProvider theme={THEME}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
      <NavHeader />
      <div className='animationContainer'>
        <HomeAnimation className='animationContainer'/>
      </div>
      <Typography sx={{width:"auto",color:"#fcfcfc",paddingTop:2, marginLeft:10, fontSize:30,'&:hover': {
            texDecoration: "underline",
            cursor: "pointer",
            transition: "0.5s",
          },}}>
       Projects<ArrowForwardIosIcon fontSize='30'/>
      </Typography>
      <Box sx={{paddingTop:2, borderLeft:"3%",borderRight:"3%", display: 'flex', flexWrap: 'wrap',justifyContent: 'center',}}>
          <ProjectThumbnail name="Large Futoshiki Generation" image={FutoshikiGeneration} java="true"software="true"/>
          <ProjectThumbnail name="Academic Paper Search" image={AcademicPaperLibrary} php="true" api="true" react="true" js="true" sqlite="true" software="true" complete="true"/>
          <ProjectThumbnail name="Wildfire Detection" image={WildfireDetection} php="true" mysql="true" python="true" pi="true"software="true" hardware="true" complete="true"/>
          <ProjectThumbnail name="Handwritten Digit Recognition" image={HandwrittenDigitRecognition} matlab="true"software="true" ml="true" complete="true"/>
      </Box>
    </ThemeProvider>
  </div>
  );
}

export default App;