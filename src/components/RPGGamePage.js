import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet';
import Image1 from '../img/rpggame/image1.png'
import Image2 from '../img/rpggame/image2.png'
import Image3 from '../img/rpggame/image3.png'
import Image4 from '../img/rpggame/image4.png'
import Image5 from '../img/rpggame/image5.png'

function RPGGame() {
    return(
        <div>
        <Helmet>
           <title>RPG Game Design</title>
       </Helmet>
        <Box sx={{marginBottom:2, color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                        RPG Game Design and Scripting
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{}}>
                        <Carousel>
                            <div>
                                <img src={Image1} />
                                <p className="legend">Level Design</p>
                            </div>
                            <div>
                                <img src={Image2} />
                                <p className="legend">Level Design</p>
                            </div>
                            <div>
                                <img src={Image3} />
                                <p className="legend">Level Design</p>
                            </div>
                            <div>
                                <img src={Image4} />
                                <p className="legend">Level Design</p>
                            </div>
                            <div>
                                <img src={Image5} />
                                <p className="legend">Combat Design</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p>Using the RPG Maker framework with the Pokemon Essentials addon, this project is to develop a Pokemon-esque game with a greater emphasis on the building of competitive teams.</p>
                            <p>This project offers an oppertunity to express creative freedom with area designs, while also developing programming skills as all of the scripting of events and interactions is done in Ruby.</p>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                        <Chip label="Ruby" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fa3725'}}/>
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
export default RPGGame;