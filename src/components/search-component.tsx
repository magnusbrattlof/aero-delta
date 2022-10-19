import { Autocomplete, TextField } from "@mui/material";
import { Airport } from "typings";

interface Props {
  options?: Airport[];
  label: string;
  search: string;
  selected: Airport | null;
  onSearch: (search: string) => void;
  onSelect: (airport: Airport | null) => void;
}

export const SearchComponent = ({
  options,
  label,
  onSelect,
  onSearch,
  search,
  selected,
}: Props) => {
  return (
    <Autocomplete
      id="airport-search"
      value={selected}
      onChange={(_, selectedAirport: Airport | null) => {
        onSelect(selectedAirport);
      }}
      inputValue={search}
      onInputChange={(event, input) => {
        onSearch(input);
      }}
      disablePortal
      ListboxProps={{ style: { maxHeight: 200 } }}
      options={options ?? []}
      getOptionLabel={(option) => `(${option.iata_code}) - ${option.name}`}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
