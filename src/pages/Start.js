import React, { useContext } from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import QuizButton from "./../components/QuizButton";
import { QuizContext } from "../context/quiz.context";
import { DispatchContext } from "../context/quiz.context";

const Start = () => {
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { questionNumber } = useContext(QuizContext);
  const dispatch = useContext(DispatchContext);

  return (
    <>
      {questionNumber === 0 && (
        <Grid container direction="column" alignItems="center">
          <Grid item align="center">
            <Typography
              variant={matchSm ? "h4" : "h3"}
              color="primary"
              style={{ marginBottom: "0.3rem" }}
            >
              NACHO LIBRE QUIZ OF LUCHADOR
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={matchSm ? "h6" : "h5"} color="primary">
              ARE YOU A TRUE NACHO LIBRE FAN?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant={matchSm ? "h6" : "h5"}
              color="primary"
              style={{ marginBottom: "1rem" }}
            >
              CLICK THE START BUTTON TO FIND OUT
            </Typography>
          </Grid>
          <QuizButton
            onClick={() =>
              dispatch({
                type: "START_QUIZ",
              })
            }
          >
            Start
          </QuizButton>
        </Grid>
      )}
    </>
  );
};

export default Start;
