import React, { useState, useContext } from "react";
import {
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup,
  makeStyles,
  Container,
  Radio,
  Typography,
} from "@material-ui/core";
import QuizButton from "../components/QuizButton";
import { QuizContext } from "../context/quiz.context";
import { DispatchContext } from "../context/quiz.context";

const useStyles = makeStyles((theme) => ({
  questionLabel: {
    margin: "0.5rem 0rem",
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    textAlign: "center",
    lineHeight: "2rem",
  },
}));

const QuestionPage = ({ getSingleQuiz }) => {
  const classes = useStyles();
  const { score, showQuestion } = useContext(QuizContext);
  const dispatch = useContext(DispatchContext);

  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      setHelperText("Please select an option.");
      setError(true); //pop up error message
    } else {
      dispatch({
        type: "SUBMIT_ANSWER",
        userAnswerPayload: value,
        scorePayload: getSingleQuiz.correctAnswer === value ? score + 1 : score,
      });
      setValue(""); //reset value for next question
    }
  };

  return (
    <Container maxWidth="sm" align="center">
      {showQuestion && (
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" error={error}>
            <FormLabel component="legend" className={classes.questionLabel}>
              {getSingleQuiz.question}
            </FormLabel>
            <RadioGroup
              aria-label="question-choices"
              name="choices"
              value={value}
              onChange={handleRadioChange}
              style={{ alignItems: "center", marginBottom: "0.5rem" }}
            >
              {getSingleQuiz.answers.map(({ answer }, idx) => (
                <FormControlLabel
                  key={idx}
                  value={answer}
                  control={<Radio />}
                  label={
                    <Typography variant="body1" color="primary">
                      {answer}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <QuizButton onClick={handleSubmit}>Submit</QuizButton>
          <FormHelperText>{helperText}</FormHelperText>
        </form>
      )}
    </Container>
  );
};

export default QuestionPage;
