import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../img/gameboyzero/image1.png'
import Image2 from '../img/gameboyzero/image2.png'
import Image3 from '../img/gameboyzero/image3.png'
import Image4 from '../img/gameboyzero/image4.png'

function GameBoyZeroPage() {
    return(
        <Box sx={{marginBottom:2, color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                        GameBoy Zero
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{}}>
                        <Carousel>
                            <div>
                                <img src={Image1} />
                                <p className="legend">Front View</p>
                            </div>
                            <div>
                                <img src={Image2} />
                                <p className="legend">Rear View</p>
                            </div>
                            <div>
                                <img src={Image3} />
                                <p className="legend">Left Side</p>
                            </div>
                            <div>
                                <img src={Image4} />
                                <p className="legend">Right Side</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p>A GameBoy Zero is an emulation device housed inside of an original GameBoy inspired by the original project by <a style={{color: "#34ebcc"}} href="https://sudomod.com/game-boy-zero-custom-parts-guide-part-1/"><u>Wermy</u></a></p>
                            <p>This project involved modding the casing to fit a larger screen, support Micro-USB charging and 3.5mm AUX audio. The case was fitted with a new PCB that would handle button inputs, a connection to the screen and audio. After this the project was all connected together using a Raspberry Pi Zero running RetroArch.</p>
                            <p>Completing this helped to develop my hardware implementation skills as the PCB involved soldering and interpretation of circuit diagrams, and my software skills in setting up the environment for RetroArch to run in.</p>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                        <Chip label="Raspberry Pi" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#e87168'}}/>
                        <Chip label="Python" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#253e8f', color:'#fcfcfc'}}/>
                        <Chip label="Hardware" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#333333', color:'#fcfcfc'}}/>
                        <Chip label="Software" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
                        <Chip label="Complete" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#00ff08'}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default GameBoyZeroPage;