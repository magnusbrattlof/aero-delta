import { Airport, Coordinate } from "typings";
import { haversineDistance } from "~helpers";

interface Return {
  markers: Coordinate[];
  distance?: { km: number; nauticalMile: number };
}

export const useCoordinates = (
  airportA: Airport | null,
  airportB: Airport | null
): Return => {
  const getDistance = () => {
    if (airportA && airportB) {
      return haversineDistance(
        [airportA.lat, airportA.lng],
        [airportB.lat, airportB.lng]
      );
    }
  };

  const markers: Coordinate[] =
    airportA && airportB
      ? [
          [airportA.lat, airportA.lng],
          [airportB.lat, airportB.lng],
        ]
      : [];

  return {
    distance: getDistance(),
    markers,
  };
};
