import QuizApp from "./QuizApp";
import { QuizProvider } from "./context/quiz.context";

const App = () => {
  return (
    <>
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </>
  );
};

export default App;
