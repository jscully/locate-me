import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { LocationDetail } from "../../utils/model/LocationDetail";

interface Props {
  location: LocationDetail;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const getDisplayText = (text: string): string => {
  if (text === "") {
    return "No data";
  } else {
    return text;
  }
};

const LocationDetails: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {props.location.city} ({props.location.region}) {props.location.regionName}, {props.location.country} (
            {props.location.countryCode}) {props.location.zip}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{getDisplayText(props.location.timezone)}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {props.location.lat}, {props.location.lon}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{getDisplayText(props.location.isp)}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{getDisplayText(props.location.org)}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{getDisplayText(props.location.query)}</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LocationDetails;
