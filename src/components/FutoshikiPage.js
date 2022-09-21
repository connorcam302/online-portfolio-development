import { Box, Typography, Grid, Chip, Button } from "@mui/material/";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../img/futoshiki/image1.png";
import Helmet from "react-helmet";
import PDFFile from "../pdf/EvaluatingMethodsOfHandwrittenDigitRecognitionUsingPrincipalComponentAnalysis.pdf";

function FutoshikiPage() {
  return (
    <div>
      <Helmet>
        <title>Large Futoshiki Generation</title>
      </Helmet>
      <Box
        sx={{
          marginBottom: 2,
          color: "#dedee3",
          paddingLeft: 3,
          paddingRight: 3,
          marginLeft: "15%",
          marginRight: "15%",
          backgroundColor: "#181c29",
          paddingTop: 2,
          fontFamily: "Montserrat",
          paddingBottom: 4,
          borderRadius: "0px 0px 30px 30px",
          boxShadow: 10,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ fontSize: 54, padding: 1.5, color: "#fcfcfc", textAlign: "center" }}>Large Futoshiki Generation</Box>
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
                <p>
                  This project was to design a Java Application that could generate Futoshiki puzzles larger than 9x9. Currently, the largest
                  Futoshiki puzzle that can be generated is a 9x9 puzzle, however this restriction is seemingly unfounded. <br />
                </p>
                <p>
                  The program was designed to be able to generate Futoshiki puzzles of a size specified by the user that are able to exceed 9x9. In
                  generating the puzzles, the most difficult part is ensuring that the proposed puzzle only has one solution.
                </p>
                <p>
                  Overall, these goals were not hit, resulting in the generator being limited to creating puzzles only up to 7x7 in size, greater than
                  this exceeded time constraints. However the foundations set out by this project will inspire future developments of this which will
                  hopefully lead to the successful generation of a larger than 9x9 puzzle.
                </p>
              </Typography>
              <Box sx={{ textAlign: "center", margin: 3 }}>
                <Link to={PDFFile} target="_blank" download>
                    <Button variant="contained" sx={{ backgroundColor: "#f04346",margin:1}}>
                      Download Report
                    </Button>
                    <a href="https://github.com/connorcam302/Generating-Large-Futoshiki-Puzzles" target="_blank" download>
                      <Button variant="contained" sx={{margin:1}}>
                        GitHub Repository
                      </Button>
                    </a>{" "}
                </Link>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Chip label="Java" sx={{ fontSize: 18, marginLeft: 1, marginRight: 1, marginBottom: 0.5, backgroundColor: "#ed8932" }} />
                <Chip label="Software" sx={{ fontSize: 18, marginLeft: 1, marginRight: 1, marginBottom: 0.5, backgroundColor: "#dbdbdb" }} />
                <Chip label="Complete" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#00ff08'}}/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default FutoshikiPage;
