import { useContext } from "react";
import { addCounter } from "../../stores/Actions";
import { QuizContext } from "../../stores/QuizState";
import "./Start.css";

const Start = () => {
  const { dispatch } = useContext(QuizContext);

  return (
    <div className="start-title">
      <h1>Nacho Libre Quiz of Luchador</h1>
      <h2>Are you a true nacho libre fan?</h2>
      <h3>Click the start button to find out</h3>
      <button onClick={() => dispatch(addCounter())}>Start</button>
    </div>
  );
};

export default Start;
