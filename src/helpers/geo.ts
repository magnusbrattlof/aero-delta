import { Coordinate } from "typings";

/**
 *
 * @param param0 lat1, lon1
 * @param param1 lat2, lon2
 * @returns Distance between two coordinates in nautical miles
 */
export const haversineDistance = (
  [lat1, lon1]: Coordinate,
  [lat2, lon2]: Coordinate
) => {
  const toRadian = (angle: number) => (Math.PI / 180) * angle;
  const distance = (a: number, b: number) => (Math.PI / 180) * (a - b);
  const RADIUS_OF_EARTH_IN_KM = 6371;
  const NAUTICAL_MILE = 1852;

  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  // Haversine Formula ugh...
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  // Get the delta in km
  const km = RADIUS_OF_EARTH_IN_KM * c;

  // Convert km to nautical mile
  const nauticalMile = km * (1000 / NAUTICAL_MILE);

  return { km: Math.floor(km), nauticalMile: Math.floor(nauticalMile) };
};
