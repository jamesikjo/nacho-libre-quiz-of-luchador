import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import QuizButton from "../components/QuizButton";
import { QuizContext } from "../context/quiz.context";
import { DispatchContext } from "../context/quiz.context";

const Start = () => {
  const { questionCount } = useContext(QuizContext);
  const dispatch = useContext(DispatchContext);

  return (
    <>
      {questionCount === 0 && (
        <Grid container direction="column" alignItems="center">
          <Grid item align="center">
            <Typography
              variant="h4"
              color="primary"
              style={{ marginBottom: "0.3rem" }}
            >
              NACHO LIBRE QUIZ OF LUCHADOR
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="primary">
              ARE YOU A TRUE NACHO LIBRE FAN?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
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
