import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

import HomeAnimation from './HomeAnimation';
import ProjectThumbnail from './ProjectThumbnail';

import AcademicPaperLibrary from '../img/academicpaperlibrary.png'
import WildfireDetection from '../img/wildfiredetection.png'
import FutoshikiGeneration from '../img/futoshikigeneration.png'
import HandwrittenDigitRecognition from '../img/handwrittendigitrecognition.png'




function HomePage() {
  let navigate = useNavigate();

  const toProjects = () =>{ 
    let path = `projects`; 
    navigate(path);
  }

  const toAbout = () =>{ 
    let path = `about`; 
    navigate(path);
  }

  return (
  <div className="pageContent">
      <Helmet>
           <title>Home</title>
      </Helmet>
      <Box sx={{boxShadow:10}}>
        <HomeAnimation className='animationContainer'/>
      </Box>
      <Typography sx={{width:"auto",color:"#fcfcfc",paddingTop:2, marginLeft:10, fontSize:30,'&:hover': {
            texDecoration: "underline",
            cursor: "pointer",
            transition: "0.5s",
          },}}
          onClick={() => toProjects()}>
       Projects<ArrowForwardIosIcon fontSize='30'/>
      </Typography>
      <Box sx={{paddingTop:2, borderLeft:"3%",borderRight:"3%", display: 'flex', flexWrap: 'wrap',justifyContent: 'center',}}>
          <Link className="navText" to="projects/largefutoshikigeneration"><ProjectThumbnail name="Large Futoshiki Generation" image={FutoshikiGeneration} java="true"software="true" complete="true"/></Link>
          <Link className="navText" to="projects/academicpapersearch"><ProjectThumbnail name="Academic Paper Search" image={AcademicPaperLibrary} php="true" api="true" react="true" js="true" sqlite="true" software="true" complete="true"/></Link>
          <Link className="navText" to="projects/wildfiredetection"><ProjectThumbnail name="Wildfire Detection" image={WildfireDetection} php="true" mysql="true" python="true" pi="true"software="true" hardware="true" complete="true"/></Link>
          <Link className="navText" to="projects/digitrecognition"><ProjectThumbnail name="Handwritten Digit Recognition" image={HandwrittenDigitRecognition} matlab="true"software="true" ml="true" complete="true"/></Link>
      </Box>
  </div>
  );
}

export default HomePage;