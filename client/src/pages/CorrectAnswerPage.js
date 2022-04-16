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
import QuizButton from "../components/QuizButton";

const CorrectAnswerPage = ({ getSingleQuestion, getTotalQuestions }) => {
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { questionCount, showAnswer, userAnswer } = useContext(QuizContext);
  const dispatch = useContext(DispatchContext);

  const handleNextPage = () => {
    if (questionCount === getTotalQuestions) {
      dispatch({ type: "SHOW_RESULTS" });
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };
  console.log(userAnswer);
  return (
    <Container maxWidth="sm" style={{ marginTop: "1rem" }}>
      {showAnswer && (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography
              variant={matchSm ? "h4" : "h3"}
              color={
                getSingleQuestion.correctAnswer === userAnswer
                  ? "primary"
                  : "secondary"
              }
              style={{ marginBottom: "0.5rem" }}
            >
              {getSingleQuestion.correctAnswer === userAnswer
                ? "CORRECT!"
                : "WRONG"}
            </Typography>
          </Grid>

          <Grid item align="center">
            <Typography variant={matchSm ? "h5" : "h4"} color="primary">
              {`"${getSingleQuestion.correctAnswer.toUpperCase()}"`}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              color="primary"
              style={{ margin: "1rem 0rem" }}
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
              {getSingleQuestion.answerDesc}
            </Typography>
          </Grid>

          <Grid item style={{ marginBottom: "1rem" }}>
            <QuizButton onClick={handleNextPage}>
              {questionCount !== getTotalQuestions
                ? "Next Question"
                : "Results"}
            </QuizButton>
          </Grid>

          <Grid item>
            <img
              src={getSingleQuestion.answerImage}
              alt="correct-answer-img"
              style={{ maxHeight: 200, borderRadius: 10 }}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CorrectAnswerPage;
