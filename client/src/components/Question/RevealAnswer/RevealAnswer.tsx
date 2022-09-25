import { useContext, useEffect, useState } from "react";
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

  const correctAnswerTitle = options[answerData.correct_answer]?.option_title;
  const validateAnswer = userAnswer.answer_value === answerData?.correct_answer;

  useEffect(() => {
    //FETCH ANSWER DATA WITH QUESTION._ID
    async function fetchAnswer() {
      try {
        const { data } = await getData("answer/get", _id);
        setAnswerData(data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    if (validateAnswer) {
      dispatch(addScore());
    }
    fetchAnswer();
  }, []);

  useEffect(() => {
    if (validateAnswer) {
      dispatch(addScore());
    }
  }, [answerData.correct_answer]);

  const handleClickButton = () => {
    if (quizState.counterValue === 10) {
      dispatch(showResults());
    }
    dispatch(showAnswer());
    dispatch(addCounter());
  };

  const answerResult = () => {
    return validateAnswer ? (
      <h2>Correct!</h2>
    ) : (
      <h2 className="wrong">Wrong!</h2>
    );
  };

  return (
    <section>
      <div className="answer-container">
        {answerResult()}
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
