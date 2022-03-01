import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet';
import Image1 from '../img/wildfireprevention/image1.png'
import Image2 from '../img/wildfireprevention/image2.png'
import Image3 from '../img/wildfireprevention/image3.png'


function WildfireDetection() {
    return(
        <div>
            <Helmet>
                <title>Wildfire Detection</title>
            </Helmet>
        <Box sx={{marginBottom:2,color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                        Wildfire Detection
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
                                <p className="legend">Sensor with Page</p>
                            </div>
                            <div>
                                <img src={Image3} />
                                <p className="legend">Reading List</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p><b>This is past academic work which has since been submitted and graded.</b></p>
                            <p>This project was to work in a group to develop an internet of things technology.</p>
                            <p>During the time of development, wildfires through Australia were of rising concern. Our technology was designed to detect wildfires before they are concieved so preventitive action could be taken. The idea would be to deploy our sensors throughout areas to create a network of constanly updating data.</p>
                            <p>Though only a prototype was developed, to do this, we used a Raspberry Pi with a temperature and humidity sensor running a Python script to upload data to a MySQL database. From the database, a website would display data from the database.</p>
                            <p>To display the collected data a website was developed using HTML and PHP. Using the Google Maps API, a map of the sensors was displayed with coloured circles to show the potential danger at a sensors location, this was evaluating the temperature and humidity, aggregated against the terrain type.</p>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                            <Chip label="PHP" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#9978ab'}}/>
                            <Chip label="Raspberry Pi" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#e87168'}}/>
                            <Chip label="MySQL" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#52a3ff'}}/>
                            <Chip label="Python" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#253e8f', color:'#fcfcfc'}}/>
                            <Chip label="Hardware" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#333333', color:'#fcfcfc'}}/>
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
export default WildfireDetection;