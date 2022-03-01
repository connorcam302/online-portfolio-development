import { Button, Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet';
import Image1 from '../img/thiswebsite/image1.png'
import Image2 from '../img/thiswebsite/image2.png'

function ThisWebsite() {
    return(
        <div>
            <Helmet>
                <title>This Website</title>
            </Helmet>
        <Box sx={{marginBottom:2,color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                        This Website
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{}}>
                        <Carousel>
                            <div>
                                <img src={Image1} />
                                <p className="legend">Home Page</p>
                            </div>
                            <div>
                                <img src={Image2} />
                                <p className="legend">Projects Page</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p>This project is effectively a portfolio designed to show off past work and my skillset. This website was built using ReactJS and Material UI. The repository for this website can be found below.</p>
                            <Box sx={{textAlign:'center', margin:3}}>
                                <a href="https://github.com/connorcam302/online-portfolio-development" target="_blank" download><Button variant="contained" sx={{}}>GitHub Repository</Button></a>
                            </Box>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                            <Chip label="JS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fff70d'}}/>
                            <Chip label="ReactJS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#4aedff'}}/>
                            <Chip label="Software" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
                            <Chip label="Complete" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#00ff08'}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
}
export default ThisWebsite;