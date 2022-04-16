import React, { useContext } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { QuizContext } from "../context/quiz.context";
import { DispatchContext } from "../context/quiz.context";

const Results = ({ getTotalQuestions }) => {
  const { score, showResults } = useContext(QuizContext);
  const dispatch = useContext(DispatchContext);

  const restartQuiz = () => {
    dispatch({ type: "RESTART" });
  };

  const getUserRanking = () => {
    let ranking;
    const getScorePercent = (score / getTotalQuestions) * 100;
    switch (true) {
      case getScorePercent < 30: //convert to percentages
        ranking = {
          rank: "YOUNG IGNACIO",
          rankDesc: "ARE YOU SURE YOU SAW THE MOVIE?",
          rankImg:
            "https://res.cloudinary.com/jjo/image/upload/v1650079310/Quiz-of-Luchador/machete_xecf92.jpg",
        };
        break;
      case getScorePercent >= 30 && getScorePercent < 60:
        ranking = {
          rank: "MONASTERY WORKER",
          rankDesc: "NOT A LUCHADOR YET!",
          rankImg:
            "https://res.cloudinary.com/jjo/image/upload/v1650080151/Quiz-of-Luchador/monastery_adzvwr.jpg",
        };
        break;
      case getScorePercent >= 60 && getScorePercent < 80:
        ranking = {
          rank: "LUCHADOR TRAINEE",
          rankDesc: "NOT BAD, ALMOST THERE",
          rankImg:
            "https://res.cloudinary.com/jjo/image/upload/v1650080246/Quiz-of-Luchador/young-luchador_vrye0j.jpg",
        };
        break;
      case getScorePercent >= 80 && getScorePercent <= 100:
        ranking = {
          rank: "LUCHADOR NACHO",
          rankDesc: "Excellent! OFFICIALLY A LUCHADOR!",
          rankImg:
            "https://res.cloudinary.com/jjo/image/upload/v1650080158/Quiz-of-Luchador/luchador_px2ouq.jpg",
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
              style={{
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                textDecoration: "underline",
              }}
            >
              Results:
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

          <Grid item style={{ marginBottom: "1rem" }}>
            <Typography variant="h6" color="primary" align="center">
              YOUR RANK: "<u>{getUserRanking().rank}</u>"
            </Typography>
          </Grid>

          <Grid item align="center">
            <img
              src={getUserRanking().rankImg}
              alt={getUserRanking().rank}
              style={{ height: 170, borderRadius: 10 }}
            />
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              color="primary"
              style={{ marginBottom: "1rem" }}
            >
              {getUserRanking().rankDesc}
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
