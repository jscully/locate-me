import React, { FC } from "react";

interface Props {
  lat: number;
  lon: number;
}
const API_KEY:string = process.env.REACT_APP_MAP_API_KEY!;

const MapComponent: FC<Props> = (props) => {
  return (
      <iframe frameBorder="0" style={{width: "100%", height: "100%"}}
          src={"https://www.google.com/maps/embed/v1/place?q=" + props.lat + "," + props.lon + "&key=" + API_KEY}>
      </iframe>
  );
};

export default MapComponent;