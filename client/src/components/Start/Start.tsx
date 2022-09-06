import { useContext } from "react";
import { addCounter } from "../../stores/Actions";
import { QuizContext } from "../../stores/QuizState";

const Start = () => {
  const { dispatch } = useContext(QuizContext);

  return (
    <div
      className="title-container"
      style={{
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      <h1>Nacho Libre Quiz of Luchador</h1>
      <h2>Are you a true nacho libre fan?</h2>
      <h3 style={{ marginTop: "0rem" }}>Click the start button to find out</h3>
      <button onClick={() => dispatch(addCounter())}>Start</button>
    </div>
  );
};

export default Start;
