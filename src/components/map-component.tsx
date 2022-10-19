import { Coordinate } from "typings";
import {
  GoogleMap,
  LoadScript,
  Marker as MapMarker,
  Polyline,
} from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

interface Props {
  markers?: Coordinate[];
  distance?: number;
}

const DEFAULT_CENTER = {
  lat: 40,
  lng: -100,
};

const Container = styled.div`
background: white,
  width: 150,
  height: 25,
  padding: 15,
`;

export const MapComponent = ({ markers, distance }: Props) => {
  const calculateCenter = () => {
    if (markers && markers.length > 1) {
      const lat1 = markers[0][0];
      const lat2 = markers[1][0];
      const lng1 = markers[0][1];
      const lng2 = markers[1][1];
      return { lat: (lat1 + lat2) / 2, lng: (lng1 + lng2) / 2 };
    } else {
      return DEFAULT_CENTER;
    }
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDE3NMJGNZjetF_YHgrbvWjANYN7IA56aU">
      <GoogleMap
        mapContainerStyle={{ height: "100vh", width: "100vw" }}
        center={calculateCenter()}
        zoom={5}
      >
        {markers?.map((marker) => (
          <MapMarker position={{ lat: marker[0], lng: marker[1] }} />
        ))}
        {markers && markers.length >= 2 && (
          <div>
            <Polyline
              path={markers.map((marker) => ({
                lat: marker[0],
                lng: marker[1],
              }))}
            />
            <InfoWindow position={calculateCenter()}>
              <Container>
                {distance && (
                  <Typography>Nautical miles: {distance}</Typography>
                )}
              </Container>
            </InfoWindow>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
