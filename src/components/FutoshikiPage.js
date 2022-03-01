import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../img/futoshiki/image1.png'

function FutoshikiPage() {
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
                                <p className="legend">Solving Order</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p><b>This is current academic work, restricting the amount of details that can be shown.</b></p>
                            <p>This project is to design a program generating Futoshiki puzzles larger than 9x9. Currently, the largest futoshiki puzzle that can be generated is a 9x9 puzzle, however this restriction is seemingly unfounded. <br/></p>
                            <p>The program will be designed to be able to generate futoshiki puzzles of a size specified by the user that are able to exceed 9x9. In generating the puzzles, the most difficult part is ensuring that the proposed puzzle only has one solution.</p>
                            <p>This program is being developed in Java.</p>
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
export default FutoshikiPage;