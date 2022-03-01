import { Box, Typography } from '@mui/material/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Project from "./Project"
import ProjectThumbnail from './ProjectThumbnail';

import AcademicPaperLibrary from '../img/academicpaperlibrary.png'
import WildfireDetection from '../img/wildfiredetection.png'
import FutoshikiGeneration from '../img/futoshikigeneration.png'
import HandwrittenDigitRecognition from '../img/handwrittendigitrecognition.png'
import RPGGame from '../img/rpggame.png'
import GameBoyZero from '../img/gameboyzero.png'
import VikingsEsports from '../img/vikingsesports.png'
import ThisWebsite from '../img/thiswebsite.png'

function ProjectsPage() {
    return(
    <Box sx={{paddingTop:2, borderLeft:"3%",borderRight:"3%", display: 'flex', flexWrap: 'wrap',justifyContent: 'center',}}>
        <Link className="navText" to="largefutoshikigeneration"><ProjectThumbnail name="Large Futoshiki Generation" image={FutoshikiGeneration} java="true"software="true"/></Link>
        <Link className="navText" to="academicpapersearch"><ProjectThumbnail name="Academic Paper Search Website" image={AcademicPaperLibrary} php="true" api="true" react="true" js="true" sqlite="true" software="true" complete="true"/></Link>
        <Link className="navText" to="wildfiredetection"><ProjectThumbnail name="Wildfire Detection" image={WildfireDetection} php="true" mysql="true" python="true" pi="true"software="true" hardware="true" complete="true"/></Link>
        <Link className="navText" to="digitrecognition"><ProjectThumbnail name="Handwritten Digit Recognition" image={HandwrittenDigitRecognition} matlab="true"software="true" ml="true" complete="true"/></Link>
        <Link className="navText" to="vikingsesports"><ProjectThumbnail name="Vikings Esports Website" image={VikingsEsports} react="true" js="true" sqlite="true" php="true" software="true"/></Link>
        <Link className="navText" to="rpggame"><ProjectThumbnail name="RPG Game Scripting and Design" image={RPGGame} ruby="true"software="true"/></Link>
        <Link className="navText" to="gameboyzero"><ProjectThumbnail name="GameBoy Zero" image={GameBoyZero} python="true" pi="true" hardware="true" software="true" complete="true"/></Link>
        <Link className="navText" to="thiswebsite"><ProjectThumbnail name="This Website" image={ThisWebsite} react="true" js="true" sqlite="true" php="true" software="true" complete="true"/></Link>
    </Box>
    )
}
export default ProjectsPage;