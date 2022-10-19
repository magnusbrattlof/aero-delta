import { useSearchAirports } from "api/queries/use-search-airports";
import { useDebounce } from "./use-debounce";
import { useState } from "react";
import { Airport } from "typings";

interface Return {
  clearSearch: () => void;
  onSearch: (search: string) => void;
  onSelect: (option: Airport | null) => void;
  selected: Airport | null;
  search: string;
  options: Airport[] | undefined;
}

export const useSelectAirport = (): Return => {
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<Airport | null>(null);

  const debouncedSearch = useDebounce(search, 250);
  const { data: options } = useSearchAirports(debouncedSearch);

  const clearSearch = () => {
    setSearch("");
    setSelected(null);
  };

  return {
    search,
    options,
    selected,
    clearSearch,
    onSearch: (search: string) => setSearch(search),
    onSelect: (option: Airport | null) => setSelected(option),
  };
};
