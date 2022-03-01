import { Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../img/academicpapersearch/image1.png'
import Image2 from '../img/academicpapersearch/image2.png'
import Image3 from '../img/academicpapersearch/image3.png'
import Image4 from '../img/academicpapersearch/image4.png'

function AcademicPaperSearch() {
    return(
        <Box sx={{marginBottom:2, color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
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
                                <p className="legend">Papers List</p>
                            </div>
                            <div>
                                <img src={Image3} />
                                <p className="legend">Reading List</p>
                            </div>
                            <div>
                                <img src={Image4} />
                                <p className="legend">Author List</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p><b>This is past academic work which has since been submitted and graded.</b></p>
                            <p>This project was to develop a website for finding academic papers under the top of Designing Interactive Systems</p>
                            <p>The project is split into two parts, an API for returning data from an SQLite database based on parameters, and a frontend build in ReactJS for displaying the data returned from the API.</p>
                            <p>The project was designed using a real world dataset from the DIS conference; permission to use the dataset was obtained but the project is not affiliated with them.</p>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                            <Chip label="PHP" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#9978ab'}}/>
                            <Chip label="JS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fff70d'}}/>
                            <Chip label="ReactJS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#4aedff'}}/>
                            <Chip label="SQLite" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#5ea1ff'}}/>
                            <Chip label="API" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#12fc6c'}}/>
                            <Chip label="Software" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default AcademicPaperSearch;