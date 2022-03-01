import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet';
import Image1 from '../img/vikingsesports/image1.png'

function VikingsEsports() {
    return(
        <div>
            <Helmet>
                <title>Vikings Esports Website</title>
            </Helmet>
        <Box sx={{marginBottom:2,color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                        Vikings Esports Website
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{}}>
                        <Carousel>
                            <div>
                                <img src={Image1} />
                                <p className="legend">Vikings Esports Logo</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p><b>This is current academic work, restricting the amount of details that can be shown.</b></p>
                            <p>This module was to work in a team developing a system comprised of 5 subsystems, targetted at develoing teamwork skills and working as fullstack developers.</p>
                            <p>The project we chose to develop was a website for the Northumbria Student Union's Esports Society.</p>
                            <p>This website is designed to display informationr regarding the society including, their various teams and players, the games they compete in, match results and upcoming events.</p>
                            <p>The website will be developed using PHP and ReactJS.</p>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                        <Chip label="PHP" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#9978ab'}}/>
                        <Chip label="JS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fff70d'}}/>
                        <Chip label="ReactJS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#4aedff'}}/>
                        <Chip label="SQLite" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#5ea1ff'}}/>
                        <Chip label="Software" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
                        <Chip label="In Progress" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#ff6f00'}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
}
export default VikingsEsports;