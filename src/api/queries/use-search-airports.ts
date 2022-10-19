import { Airport } from "../../typings";
import { API } from "~api";
import { useQuery } from "@tanstack/react-query";
import { API_KEY } from "~constants";

interface AirlabsResponse {
  response: { airports: Airport[] };
}

const searchAirport = async (query: string): Promise<Airport[] | undefined> => {
  const params = new URLSearchParams([
    ["q", query],
    ["api_key", API_KEY],
    ["lang", "US"],
  ]);
  const { data } = await API().get<AirlabsResponse>("", { params });
  return data.response.airports;
};

interface SearchAirportReturn {
  data?: Airport[];
  error: any;
  isLoading: boolean;
}

export const useSearchAirports = (query: string): SearchAirportReturn => {
  const { data, isLoading } = useQuery([query], () => searchAirport(query));
  const onlyUs = data?.filter((airport) => airport?.country_code === "US");
  return { data: onlyUs, error: null, isLoading: isLoading };
};
