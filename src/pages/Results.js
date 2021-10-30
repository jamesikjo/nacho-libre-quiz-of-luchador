import React, { useContext } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import machete from "../assets/machete.jpg";
import luchadorTrainee from "../assets/young-luchador.jpg";
import monastery from "../assets/monastery.jpg";
import luchador from "../assets/luchador.jpg";
import { QuizContext } from "../context/quiz.context";
import { DispatchContext } from "../context/quiz.context";

const Results = ({ getTotalQuestions }) => {
  const { score, showResults } = useContext(QuizContext);
  const dispatch = useContext(DispatchContext);

  const restartQuiz = () => {
    dispatch({ type: "RESTART" });
  };

  const rankings = () => {
    let ranking;
    switch (true) {
      case score <= 3: //convert to percentages
        ranking = {
          rank: "YOUNG IGNACIO",
          rankDesc: "ARE YOU SURE YOU SAW THE MOVIE?",
          rankImg: machete,
        };
        break;
      case score >= 4 && score <= 6:
        ranking = {
          rank: "MONASTERY WORKER",
          rankDesc: "NOT A LUCHADOR YET!",
          rankImg: monastery,
        };
        break;
      case score >= 6 && score <= 8:
        ranking = {
          rank: "LUCHADOR TRAINEE",
          rankDesc: "NOT BAD, ALMOST THERE",
          rankImg: luchadorTrainee,
        };
        break;
      case score >= 9 && score <= 10:
        ranking = {
          rank: "LUCHADOR NACHO",
          rankDesc: "Excellent! OFFICIALLY A LUCHADOR!",
          rankImg: luchador,
        };
        break;
      default:
        return;
    }
    return ranking;
  };

  return (
    <>
      {showResults && (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            >
              <u>RESULTS</u>
            </Typography>
          </Grid>

          <Grid item md={6}>
            <Typography variant="h6" color="primary">
              <span style={{ fontFamily: "Chilanka", fontSize: "2rem" }}>
                {score}
              </span>{" "}
              OUT OF{" "}
              <span style={{ fontFamily: "Chilanka", fontSize: "2rem" }}>
                {getTotalQuestions}
              </span>
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              color="primary"
              align="center"
              gutterBottom
            >
              YOUR RANK: "<u>{rankings().rank}</u>"
            </Typography>
          </Grid>

          <Grid item align="center">
            <img
              src={rankings().rankImg}
              alt={rankings().rank}
              style={{ height: 170, borderRadius: 10 }}
            />
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              color="primary"
              style={{ marginBottom: "1rem" }}
            >
              {rankings().rankDesc}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={restartQuiz}
            >
              Try Again
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Results;
