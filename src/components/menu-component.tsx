import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useWindowSize } from "~hooks";

interface Props {
  open: boolean;
  children?: React.ReactNode;
  setMenu: (open: boolean) => void;
}

const BoxComponent = styled(Box)<BoxProps & { deviceHeight: number }>(
  (props) => ({
    width: "auto",
    height: "50vh",
    padding: "16px",
    "@media (max-width:780px)": {
      height: `calc(${props.deviceHeight}px - 30vh)`,
    },
  })
);

export const MenuComponent = ({ children, open, setMenu }: Props) => {
  const toggleDrawer =
    (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMenu(state);
    };

  const { windowSize } = useWindowSize();

  return (
    <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
      <BoxComponent
        deviceHeight={windowSize.height}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        {children}
      </BoxComponent>
    </Drawer>
  );
};
