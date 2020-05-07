import React, { FC } from "react";
import { Grid, CssBaseline, ButtonGroup, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

interface Props {}

const Welcome: FC<Props> = (props) => {
  return (
    <div>
      <Grid container spacing={0} direction="column" alignItems="center" justify="center">
        <Typography variant="h3" component="h3" gutterBottom>
          Locate My IP
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Locate the geographical position of your current IP address by clicking <b>"Locate Me"</b>
        </Typography>
      </Grid>
      <Grid style={{ marginTop: "10px" }} container spacing={0} direction="column" alignItems="center" justify="center">
        <CssBaseline />
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button to="/location" component={Link} style={{ justifyContent: "center" }}>
            Locate Me
          </Button>
          <Button to="/about" component={Link} style={{ justifyContent: "center" }}>
            Learn More
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
};

export default Welcome;
