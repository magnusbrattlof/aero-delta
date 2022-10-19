export interface Airport {
  name: string;
  iata_code: string;
  icao_code: string;
  lat: number;
  lng: number;
  alt: number;
  city: string;
  city_code: string;
  un_locode: string;
  timezone: string;
  country_code: string;
  phone: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  names: { [key: string]: string };
  runways: number;
  departures: number;
  connections: number;
  is_major: boolean;
  is_international: number;
  slug: number;
}
