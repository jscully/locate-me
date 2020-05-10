import "../App.css";
import "typeface-roboto";
import React, { Component } from "react";
import { LocationAPI } from "../api/LocationAPI";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import LocationDetailsView from "../components/location-details/LocationDetails";
import { LocationDetail } from "../utils/model/LocationDetail";
import InfoBar from "../components/info-bar/InfoBar";
import MapComponent from "../components/map/MapComponent";
import SearchBar from "../components/search-bar/SearchBar";

interface Props {}

interface State {
  location: LocationDetail;
  showMessage: boolean;
  infoMessage: string;
  loading: boolean;
}

class LocationView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      location: {} as LocationDetail,
      showMessage: false,
      infoMessage: "",
      loading: true,
    };
  }

  locate = async () => {
    this.setState({ loading: true });
    const response = await LocationAPI.getLocationDetails();

    if (response.data && response.data.status !== "fail") {
      const locationDetails = response.data;
      this.setState({ location: locationDetails });
    } else {
      this.setState({
        showMessage: true,
        infoMessage: "An error has occurred",
      });
    }
    this.setState({ loading: false });
  };

  locateByIP = async (ipAddress: string) => {
    this.setState({ loading: true });
    const response = await LocationAPI.getLocationDetailsByIp(ipAddress);
    if (response.data && response.data.status !== "fail") {
      const locationDetails = response.data;
      this.setState({ location: locationDetails });
    } else {
      this.setState({
        showMessage: true,
        infoMessage: "An error has occurred " + response.data.message,
      });
    }
    this.setState({ loading: false });
  };

  closeInfoBar = () => {
    this.setState({
      showMessage: false,
      infoMessage: "",
    });
  };

  componentDidMount() {
    this.locate();
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    if (this.state.loading === true) {
      return <CircularProgress size={100} value={100} />;
    }

    return (
      <div className="content">
        <Grid container spacing={3} direction="column" alignItems="center" justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" gutterBottom>
              Location Data
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "10px" }}>
            <SearchBar search={this.locateByIP} searchFieldValue="Search for an IP" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <LocationDetailsView location={this.state.location} />
              </Grid>
              <Grid item xs={6}>
                <MapComponent lat={this.state.location.lat} lon={this.state.location.lon} />
              </Grid>
            </Grid>
          </Grid>
          <InfoBar open={this.state.showMessage} handleClose={this.closeInfoBar} infoMessage={this.state.infoMessage} />
        </Grid>
      </div>
    );
  }
}
export default LocationView;
