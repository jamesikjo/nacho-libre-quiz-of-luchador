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
  console.log(validateAnswer);
  useEffect(() => {
    //FETCH ANSWER DATA WITH QUESTION ID
    async function fetchData() {
      const res = await fetch(`/answer/get/${_id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch answer");
      }
      const { answerData } = await res.json();
      setAnswerData(answerData[0]); //res.json to read body of response
    }
    if (validateAnswer) {
      dispatch(addScore());
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("useffect");
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
      <h2 style={{ color: "red" }}>Wrong!</h2>
    );
  };

  return (
    <section>
      <div className="answer-container">
        {answerResult()}
        <h3>"{correctAnswerTitle}" was the correct answer!</h3>
        <p></p>
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
