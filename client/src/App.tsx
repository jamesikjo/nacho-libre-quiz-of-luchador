import { useState, useEffect, useContext } from "react";
import MainHeader from "./components/MainHeader";
import Start from "./components/Start";
import Counter from "./components/Counter";
import Question from "./components/Question";
import { QuizContext } from "./stores/QuizState";
import { QuestionData } from "./utils/types/QuestionData";
import Results from "./components/Results";
import "./App.css";
import { getData } from "./utils/fetchData";

const App = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const { quizState } = useContext(QuizContext);
  const { counterValue, showResults } = quizState;

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const { data } = await getData("questions/get");
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuestions();
  }, []);

  if (!questions) {
    return null;
  }

  const totalQuestions: number = questions.length;

  return (
    <div className="App">
      <MainHeader />
      <main
        className="main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
