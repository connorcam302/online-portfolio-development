import { Button, Box, Typography, Grid, Chip } from '@mui/material/';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Image1 from '../img/digitrecognition/image1.png'
import Image2 from '../img/digitrecognition/image2.png'
import PDFFile from '../pdf/EvaluatingMethodsOfHandwrittenDigitRecognitionUsingPrincipalComponentAnalysis.pdf'

function DigitRecognitionPage() {
    return(
        <div>
        <Helmet>
            <title>Handwritten Digit Recognition</title>
        </Helmet>
        <Box sx={{marginBottom:2, color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{fontSize: 54,padding:1.5,color:"#fcfcfc",textAlign: "center"}}>
                    Handwritten Digit Recognition
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{}}>
                        <Carousel>
                            <div>
                                <img src={Image1} />
                                <p className="legend">KNN vs SVM Graph</p>
                            </div>
                            <div>
                                <img src={Image2} />
                                <p className="legend">KNN vs SVN Accuracy Table</p>
                            </div>
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{}}>
                        <Typography>
                            <p>This project was to develop a program that could identify handwritten digits using two different methods, the compare the accuracy of the methods.</p>
                            <p>Using MatLab, a dataset of handwritten digits was read and attempted to be recognised, the recognised digit was then compared against the actual digit to give an accuracy rating.</p>
                            <p>The two methods being compared were KNN (K-Nearest Neighbour) and SVM (Support Vector Machine). The report of findings can be downloaded below.</p>
                            <Box sx={{textAlign:'center', margin:3}}>
                                <Link to={PDFFile} target="_blank" download><Button variant="contained" sx={{}}>Download</Button></Link>
                            </Box>
                        </Typography>
                        <Box sx={{textAlign:"center"}}>
                        <Chip label="MATLAB" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#5b68fc'}}/>
                        <Chip label="Software" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
                        <Chip label="Complete" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#00ff08'}}/>
                        <Chip label="Machine Learning" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#d457d2'}}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </Box>
        </div>
    )
}
export default DigitRecognitionPage;