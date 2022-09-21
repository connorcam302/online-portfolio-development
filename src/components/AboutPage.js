import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

function AboutPage() {

    var today = new Date();
    var birthDate = new Date("2000-04-05");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return(
        <div>
        <Helmet>
            <title>About</title>
        </Helmet>
    
        <Box sx={{fontSize: 20,marginBottom:2, color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
                <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                    About
                </Box>
                <Box sx={{fontSize: 32,padding:1.5,color:"#fcfcfc"}}>
                    Personal Details
                </Box>
                <Box sx={{}}>
                    <ul>
                        <li>My name is Connor and I'm {age} years old </li>
                        <li>I'm a BSc Computer Science who graduated from Northumbria University with First Class Honours in 2022.</li>
                        <li>I currently am a Program & Project Mgmt Associate at Accenture, working on software development projects.</li>
                    </ul>
                </Box>
                <Box sx={{fontSize: 32,padding:1.5,color:"#fcfcfc"}}>
                    Software Experience
                </Box>
                <Box sx={{paddingLeft:2}}>
                    I have experience programing in the following languages and frameworks.
                </Box>
                <Box sx={{}}>
                    <Grid container>
                        <Grid item xs={2}><ul><li>Java</li></ul></Grid>
                        <Grid item xs={2}><ul><li>JavaScript</li></ul></Grid>
                        <Grid item xs={2}><ul><li>PHP</li></ul></Grid>
                        <Grid item xs={2}><ul><li>ReactJS</li></ul></Grid>
                        <Grid item xs={2}><ul><li>Python</li></ul></Grid>
                        <Grid item xs={2}><ul><li>MySQL</li></ul></Grid>
                        <Grid item xs={2}><ul><li>SQLite</li></ul></Grid>
                        <Grid item xs={2}><ul><li>C</li></ul></Grid>
                        <Grid item xs={2}><ul><li>MatLab</li></ul></Grid>
                    </Grid>
                </Box>
                <Box sx={{fontSize: 32,padding:1.5,color:"#fcfcfc"}}>
                    Hobbies & Interests
                </Box>
                <Box sx={{}}>
                    <ul>
                        <li>I still maintain an interest in software development as a hobby, this can be seen in some of the <Link className="navText" to="../projects"><u style={{color: "#34ebcc"}}>projects</u></Link> that I have completed outside of academia.</li>
                        <li>I have interests in both gaming and sports.</li>
                        <li>I frequently go out running, typically every other day.</li>
                        <li>I enjoy watching both football and F1.</li>
                    </ul>
                </Box>
                <Box sx={{fontSize: 32,padding:1.5,color:"#fcfcfc"}}>
                    Other
                </Box>
                <Box sx={{paddingLeft:2}}>
                    Further Informaion is available on request at connorcam302@gmail.com.
                </Box>
                <Box sx={{}}>
                    <Grid container>

                    </Grid>
                </Box>
        </Box>
        </div>
    )
}
export default AboutPage;