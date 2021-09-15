import React, { useContext } from "react";
import {
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { QuizContext } from "../context/quiz.context";
import { DispatchContext } from "../context/quiz.context";
import QuizButton from "./../components/QuizButton";

const CorrectAnswerPage = ({ getSingleQuiz, getTotalQuestions }) => {
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { questionNumber, showAnswer, userAnswer } = useContext(QuizContext);
  const dispatch = useContext(DispatchContext);

  const handleNextPage = () => {
    if (questionNumber === getTotalQuestions) {
      dispatch({ type: "SHOW_RESULTS" });
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  return (
    <Container maxWidth="sm">
      {showAnswer && (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant={matchSm ? "h4" : "h3"}
              color="primary"
              style={{ marginBottom: "0.5rem" }}
            >
              {getSingleQuiz.correctAnswer === userAnswer
                ? "CORRECT!"
                : "WRONG"}
            </Typography>
          </Grid>

          <Grid item align="center">
            <Typography variant={matchSm ? "h5" : "h4"} color="primary">
              {`"${getSingleQuiz.correctAnswer.toUpperCase()}"`}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              color="primary"
              style={{ marginBottom: "0.5rem" }}
            >
              WAS THE CORRECT ANSWER
            </Typography>
          </Grid>

          <Grid item align="center">
            <Typography
              variant="body1"
              color="primary"
              style={{ marginBottom: "1rem" }}
            >
              {getSingleQuiz.answerDetails}
            </Typography>
          </Grid>

          <Grid item style={{ marginBottom: "1rem" }}>
            <QuizButton onClick={handleNextPage}>
              {questionNumber !== getTotalQuestions
                ? "Next Question"
                : "Results"}
            </QuizButton>
          </Grid>

          <Grid item>
            <img
              src={getSingleQuiz.correctImg}
              alt="correct-answer-img"
              style={{ height: 170, borderRadius: 10 }}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CorrectAnswerPage;
