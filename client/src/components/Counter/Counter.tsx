import { useContext } from "react";
import { QuizContext } from "../../stores/QuizState";
import mask from "../../assets/images/mask.png";
import "./Counter.css";

type CounterProps = {
  totalQuestions: number;
};

const Counter = ({ totalQuestions }: CounterProps) => {
  const { quizState } = useContext(QuizContext);
  const { counterValue, userScore } = quizState;

  return (
    <div className="counter">
      <div className="counter-wrapper">
        {counterValue > totalQuestions && <p>Results / {totalQuestions}</p>}
        {counterValue <= totalQuestions && (
          <p>
            Question:{" "}
            <span>
              {counterValue} / {totalQuestions}
            </span>
          </p>
        )}
        <img className="mask" src={mask} alt="mask" />
        <p>
          Score:{" "}
          <span>
            {userScore}/{totalQuestions}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Counter;
