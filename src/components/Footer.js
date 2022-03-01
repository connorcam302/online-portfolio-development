import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Footer(){
    return(
    <Box>
        <Typography sx={{lineHeight:0.7,textAlign:"center",color:"#dedee3"}}>
            <p>Connor Campbell</p>
            <p>Northumbria University</p>
            <p>connorcam302@gmail.com</p>
        </Typography>
    </Box>
    )
}

export default Footer;