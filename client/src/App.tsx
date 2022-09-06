import { useState, useEffect, useContext } from "react";
import MainHeader from "./components/MainHeader";
import Start from "./components/Start";
import Counter from "./components/Counter";
import Question from "./components/Question";
import { QuizContext } from "./stores/QuizState";
import { QuestionData } from "./utils/types/QuestionData";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const { quizState } = useContext(QuizContext);

  const { counterValue, showResults } = quizState;
  const totalQuestions: number = questions.length;

  useEffect(() => {
    async function fetchData() {
      //set proxy to localhost:8000 inside client/package.json for development
      const res = await fetch("/questions/get");
      if (!res.ok) {
        throw new Error("Failed to fetch questions");
      }
      const { shuffledData } = await res.json();
      setQuestions(shuffledData); //res.json to read body of response
    }
    fetchData();
  }, []);

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
          {showResults && <Results />}
        </div>
      </main>
    </div>
  );
};

export default App;
