import React, { useContext } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import nachoHeader from "../assets/nacho_header.png";
import { DispatchContext } from "../context/quiz.context";

const MainHeader = () => {
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useContext(DispatchContext);

  return (
    <Grid
      item
      style={{ marginTop: "1rem", cursor: "pointer" }}
      onClick={() => dispatch({ type: "RESET" })}
      align="center"
    >
      <img
        src={nachoHeader}
        alt="nacho-header"
        style={{ height: matchSm && 320 }}
      />
    </Grid>
  );
};

export default MainHeader;
