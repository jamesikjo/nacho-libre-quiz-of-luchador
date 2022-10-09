import React, { useContext, useState } from "react";
import { showAnswer } from "../../stores/Actions";
import { QuizContext } from "../../stores/QuizState";
import RevealAnswer from "./RevealAnswer";
import { Props, UserAnswer } from "./question.types";
import "./Question.css";

const Question = ({ question }: Props) => {
  const { quizState, dispatch } = useContext(QuizContext);
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({} as UserAnswer);
  const { options } = question;

  const handleOptionClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserAnswer({
      answer_value: +event.target.value,
      answer_title: event.target.id,
    });
  };

  const handleSubmitQuestion = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    dispatch(showAnswer());
  };

  return (
    <div>
      {quizState.showAnswer ? (
        <RevealAnswer question={question} userAnswer={userAnswer} />
      ) : (
        <div className="question-container">
          <form onSubmit={(e) => handleSubmitQuestion(e)}>
            <fieldset>
              <legend>{question.question}</legend>
              {options.map(({ option_value, option_title }) => (
                <React.Fragment key={option_title}>
                  <p>
                    <input
                      type="radio"
                      id={option_title}
                      value={option_value}
                      name="options"
                      onChange={handleOptionClick}
                      required
                    />
                    <label htmlFor={option_title}> {option_title}</label>
                  </p>
                </React.Fragment>
              ))}
              <button type="submit" className="submit_button">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default Question;
