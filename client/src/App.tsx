import { useContext } from "react";
import MainHeader from "./components/MainHeader";
import Start from "./components/Start";
import Counter from "./components/Counter";
import Question from "./components/Question";
import { QuizContext } from "./stores/QuizState";
import Results from "./components/Results";
import useQuestions from "./utils/hooks/useQuestions";
import "./App.css";

const App = () => {
  const [questions] = useQuestions();
  const { quizState } = useContext(QuizContext);
  const { counterValue, showResults } = quizState;

  if (!questions) return null;

  const totalQuestions: number = questions.length;

  return (
    <div className="App">
      <MainHeader />
      <main className="main">
        <div className="main-container">
          <Counter totalQuestions={totalQuestions} />
          {counterValue === 0 && <Start />}
          {counterValue > 0 && counterValue <= totalQuestions && (
            <Question question={questions[counterValue - 1]} />
          )}
          {showResults && <Results totalQuestions={totalQuestions} />}
        </div>
      </main>
    </div>
  );
};

export default App;
