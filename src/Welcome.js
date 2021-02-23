import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainFeatured from "./MainFeatured";
import CardPreview from "./CardPreview";

const Welcome = () => {   
    return (
        <Grid container spacing={3}>
        <Grid item lg={12}>
          <MainFeatured />
        </Grid>
      </Grid>
    )
  }
  export default Welcome