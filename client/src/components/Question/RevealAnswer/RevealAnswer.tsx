import { useContext, useEffect, useState, useCallback } from "react";
import { QuizContext } from "../../../stores/QuizState";
import { AnswerData } from "../../../utils/types/AnswerData";
import { QuestionData } from "../../../utils/types/QuestionData";
import {
  addCounter,
  addScore,
  showAnswer,
  showResults,
} from "../../../stores/Actions";
import "./RevealAnswer.css";
import { getData } from "../../../utils/fetchData";

type Props = {
  question: QuestionData;
  userAnswer: {
    answer_value: number;
    answer_title: string;
  };
};

const RevealAnswer = ({ question, userAnswer }: Props) => {
  const [answerData, setAnswerData] = useState<AnswerData>({} as AnswerData);
  const { quizState, dispatch } = useContext(QuizContext);
  const { options, _id } = question;

  //set to boolean when answerData is populated
  const validateAnswer = answerData?._id
    ? userAnswer.answer_value === answerData.correct_answer
    : null;

  const correctAnswerTitle = options[answerData.correct_answer]?.option_title;

  const fetchAnswer = useCallback(async () => {
    try {
      const { data } = await getData("answer/get", _id);
      setAnswerData(data[0]);
    } catch (err) {
      console.log(err);
    }
  }, [_id]);

  useEffect(() => {
    fetchAnswer();
  }, [fetchAnswer]);

  useEffect(() => {
    if (validateAnswer) {
      dispatch(addScore());
    }
  }, [_id, validateAnswer, dispatch]);

  const handleClickButton = () => {
    if (quizState.counterValue === 10) {
      dispatch(showResults());
    }
    dispatch(showAnswer());
    dispatch(addCounter());
  };

  //return blank until answerData is populated and sets validateAnswer
  if (validateAnswer === null) return null;

  return (
    <section>
      <div className="answer-container">
        {validateAnswer ? <h2>Correct!</h2> : <h2 className="wrong">Wrong!</h2>}
        <h3>
          <span>"{correctAnswerTitle}</span>" was the correct answer!
        </h3>
        <p>{answerData.answer_desc}</p>
        <button className="answer_button" onClick={handleClickButton}>
          {quizState.counterValue === 10 ? "Results" : "Next Question"}
        </button>
        <img
          className="answer_image"
          src={answerData.answer_img}
          alt="answer"
        />
      </div>
    </section>
  );
};

export default RevealAnswer;
