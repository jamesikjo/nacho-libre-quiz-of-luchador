import React, { useContext } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import mask from "../assets/mask.png";
import { QuizContext } from "../context/quiz.context";

const useStyles = makeStyles((theme) => ({
  counterContainer: {
    margin: "1rem 0rem 0.5rem 0rem",
  },
}));

const Counter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { questionNumber, score } = useContext(QuizContext);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.counterContainer}
    >
      <Grid item>
        <Typography
          variant={matchSm ? "h6" : "h5"}
          color="secondary"
          style={{ paddingRight: "1rem" }}
        >
          Question:{" "}
          <span
            style={{
              fontFamily: "Chilanka",
              fontSize: matchSm ? "1.5rem" : "1.8rem",
            }}
          >
            {questionNumber}/10
          </span>
        </Typography>
      </Grid>
      <Grid item>
        <img src={mask} alt="mask" style={{ height: 30, width: 25 }} />
      </Grid>
      <Grid item>
        <Typography
          variant={matchSm ? "h6" : "h5"}
          color="secondary"
          style={{
            marginRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          Score:{" "}
          <span
            style={{
              fontFamily: "Chilanka",
              fontSize: matchSm ? "1.5rem" : "1.8rem",
            }}
          >
            {score}/10
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Counter;
