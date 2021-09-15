import React, { useContext } from "react";
import Start from "./pages/Start";
import Results from "./pages/Results";
import Counter from "./components/Counter";
import MainHeader from "./components/MainHeader";
import QuestionPage from "./pages/QuestionPage";
import CorrectAnswerPage from "./pages/CorrectAnswerPage";
import quizData from "./quizData";
import { QuizContext } from "./context/quiz.context";

const App = () => {
  const { questionIdx } = useContext(QuizContext);
  const getSingleQuiz = quizData[questionIdx];
  const getTotalQuestions = quizData.length;
  return (
    <div style={{ paddingTop: "2rem" }}>
      <MainHeader />
      <Counter />
      <Start />
      <QuestionPage getSingleQuiz={getSingleQuiz} />
      <CorrectAnswerPage
        getSingleQuiz={getSingleQuiz}
        getTotalQuestions={getTotalQuestions}
      />
      <Results />
    </div>
  );
};

export default App;
