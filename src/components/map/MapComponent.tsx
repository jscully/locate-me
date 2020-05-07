import React, { FC } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { LocationAPI } from "../../api/LocationAPI";

interface Props {
  google: Object;
  lat: number;
  lon: number;
}

const mapStyles = {
  width: "40%",
  height: "40%",
};

const MapComponent: FC<Props> = (props) => {
  return (
    <Map google={props.google} style={mapStyles} initialCenter={{ lat: props.lat, lng: props.lon }}>
      <Marker />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: LocationAPI.getApiKey(),
})(MapComponent);
