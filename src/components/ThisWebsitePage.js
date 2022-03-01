import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../img/thiswebsite/image1.png'
import Image2 from '../img/thiswebsite/image2.png'

function ThisWebsite() {
    return(
        <Box sx={{marginBottom:2,color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                        Large Futoshiki Generation
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
                            <p>This project is effectively a portfolio designed to show off past work and my skillset.</p>
                            <p>Various projects</p>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                            <Chip label="Java" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#ed8932'}}/>
                            <Chip label="Software" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
                            <Chip label="In Progress" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#ff6f00'}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default ThisWebsite;