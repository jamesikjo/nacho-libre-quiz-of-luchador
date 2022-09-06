import { useContext } from "react";
import { QuizContext } from "../../stores/QuizState";
import mask from "../../assets/images/mask.png";

type CounterProps = {
  totalQuestions: number;
};

const Counter = ({ totalQuestions }: CounterProps) => {
  const { quizState } = useContext(QuizContext);
  const { counterValue, userScore } = quizState;

  return (
    <div className="counter-container">
      <div
        className="counter-inner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
          fontSize: "1.25rem",
        }}
      >
        {counterValue > totalQuestions && <p>Results / {totalQuestions}</p>}
        {counterValue <= totalQuestions && (
          <p>
            Question:{" "}
            <span>
              {counterValue} / {totalQuestions}
            </span>
          </p>
        )}
        <img
          src={mask}
          alt="mask"
          style={{ width: 20, height: 25, margin: "0 0.75rem" }}
        />
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
