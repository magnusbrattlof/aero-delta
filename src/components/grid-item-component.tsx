import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { GridBaseProps } from "@mui/system";

const GridItem = styled(Grid)<GridBaseProps>(({ theme }) => ({
  "&.MuiGrid-item": {
    padding: 10,
  },
}));

export const GridItemComponent = (props: GridBaseProps) => {
  return <GridItem item {...props} />;
};
