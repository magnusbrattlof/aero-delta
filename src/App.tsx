import {
  GridItemComponent,
  MapComponent,
  MenuComponent,
  SearchComponent,
} from "~components";
import { useCoordinates, useSelectAirport } from "~hooks";
import { useState } from "react";
import { Button, Grid, styled, Typography } from "@mui/material";
import Fab, { FabProps } from "@mui/material/Fab";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const FabButton = styled(Fab)<FabProps>(() => ({
  position: "absolute",
  bottom: 20,
  left: 20,
}));

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const airportA = useSelectAirport();
  const airportB = useSelectAirport();

  const clearSearch = () => {
    airportA.clearSearch();
    airportB.clearSearch();
  };

  const { distance, markers } = useCoordinates(
    airportA.selected,
    airportB.selected
  );

  const toggleMenu = (open: boolean) => setMenuOpen(open);

  return (
    <div style={{ position: "relative" }} className="App">
      <MapComponent distance={distance?.nauticalMile} markers={markers} />
      <FabButton
        color="error"
        aria-label="add"
        onClick={() => toggleMenu(true)}
      >
        <AirplanemodeActiveIcon />
      </FabButton>
      <MenuComponent open={menuOpen} setMenu={toggleMenu}>
        <Grid
          style={{ margin: 0, width: "100%" }}
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <GridItemComponent xs={12} md={6}>
            <SearchComponent label="Airport (A)" {...airportA} />
          </GridItemComponent>
          <GridItemComponent xs={12} md={6}>
            <SearchComponent label="Airport (B)" {...airportB} />
          </GridItemComponent>
          <GridItemComponent xs={12}>
            <Button onClick={clearSearch} variant="contained" color="error">
              Clear search
            </Button>
          </GridItemComponent>
          <GridItemComponent xs={12}>
            {distance ? (
              <div>
                <Typography>{`Nautical miles: ${
                  distance?.nauticalMile && distance?.nauticalMile
                }`}</Typography>

                <Typography>{`Kilometres: ${distance?.km}`}</Typography>
              </div>
            ) : (
              <Typography>
                Select two airports to calculate the distance
              </Typography>
            )}
          </GridItemComponent>
        </Grid>
      </MenuComponent>
    </div>
  );
};

export default App;
