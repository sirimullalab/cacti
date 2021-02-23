import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainFeatured from "./MainFeatured";
import CardPreview from "./CardPreview";

const About = () => {   
    return (
    
        <Grid item lg={12}>
        <Typography variant="title" component="h1">
            About Us
        </Typography>
        <Typography variant="body2" color="inherit" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        </Grid>
      
    )
  }
  export default About


