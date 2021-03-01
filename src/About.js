import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainFeatured from "./MainFeatured";
import CardPreview from "./CardPreview";
import Paper from "@material-ui/core/Paper";

const styles = () => ({
    root: { borderRadius: 20, borderColor: "#000", padding: 50 }
  });
  

const About = () => {   
    return (
        <center>
        <Grid item lg={12}>
        <Paper>
        <Typography variant="title" component="h1">
            About Us
        </Typography>
        <Typography variant="body2" color="inherit" component="p">
        Center for AI-enabled Cancer Therapeutic Innovations" (CACTI) will provide Texas researchers valuable AI resources and expertise for chemotherapeutic discovery, development, and optimization. CACTI will bridge a major gap in Texas’ drug ecosystem and increase the competitiveness of its researchers by providing an integrated environment of leading-edge AI programs and next-generation supercomputer resources capable of successfully translating fundamental cancer biology discoveries into novel cancer drugs. Equally important, CACTI's large team of expert computational chemists will collaborate with Texas researchers and clinicians on innovative chemotherapeutic projects.
        </Typography>
        </Paper>
        </Grid>
        </center>
      
    )
  }
  export default About


