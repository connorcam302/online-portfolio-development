import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';
import { typography } from "@mui/system";

/**
* NotFount
* 
* Creates a page for the user to go when the desired page cannot be found.
*
* @author Connor Campbell
* @todo
*/

class NotFound extends React.Component {

    render(){
        <Helmet>
            <title>Not Found</title>
        </Helmet>
        return(
            <Box sx={{marginBottom:2, color: "#dedee3", paddingLeft:3,paddingRight:3,marginLeft:"15%",marginRight:"15%", backgroundColor:"#181c29", paddingTop:2, fontFamily:"Montserrat", paddingBottom:4,borderRadius: '0px 0px 30px 30px', boxShadow: 10,}}>
                <Typography>Page not found. Return <Link className="navText" to="../"><u style={{color: "#34ebcc"}}>home</u></Link></Typography>
            </Box>
        )
    }
}

export default NotFound;