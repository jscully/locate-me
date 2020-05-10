import React, { FC } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

interface Props {
  google: Object;
  lat: number;
  lon: number;
}

const mapStyles = {
  width: "40%",
  height: "40%",
};

const API_KEY:string = process.env.REACT_APP_MAP_API_KEY!;

const MapComponent: FC<Props> = (props) => {
  return (
    <Map google={props.google} style={mapStyles} initialCenter={{ lat: props.lat, lng: props.lon }}>
      <Marker />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapComponent);
