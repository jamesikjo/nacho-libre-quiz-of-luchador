import { useContext } from "react";
import { resetQuiz } from "../../stores/Actions";
import { QuizContext } from "../../stores/QuizState";
import "./Results.css";

const Results = () => {
  const { quizState, dispatch } = useContext(QuizContext);

  const handleClick = () => {
    dispatch(resetQuiz());
  };
  return (
    <div className="results">
      <h2>Results</h2>
      <h3>
        You got <span>{quizState.userScore}/10</span> Right.
      </h3>
      <h3>Your Rank:</h3>
      <button onClick={handleClick}>Try Again</button>
    </div>
  );
};

export default Results;
