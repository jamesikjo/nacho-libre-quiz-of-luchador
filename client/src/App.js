import React, { useContext, useState, useEffect } from "react";
import Start from "./pages/Start";
import Results from "./pages/Results";
import Counter from "./components/Counter";
import MainHeader from "./components/MainHeader";
import QuestionPage from "./pages/QuestionPage";
import CorrectAnswerPage from "./pages/CorrectAnswerPage";
// import quizData from "./quizData";
import { QuizContext } from "./context/quiz.context";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const { questionIdx } = useContext(QuizContext);

  const getSingleQuiz = questions[questionIdx];
  const getTotalQuestions = questions.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/quiz");
        //get returns a res object {data: ... , status: ... , headers: ..., etc...}
        console.log("useEffect running");
        setQuestions(res.data);
      } catch (err) {
        alert(err.response.data.message);
        console.log(err.response.data.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ paddingTop: "2rem" }}>
      <MainHeader />
      <main>
        <Counter getTotalQuestions={getTotalQuestions} />
        <Start />
        <QuestionPage getSingleQuiz={getSingleQuiz} />
        <CorrectAnswerPage
          getSingleQuiz={getSingleQuiz}
          getTotalQuestions={getTotalQuestions}
        />
        <Results getTotalQuestions={getTotalQuestions} />
      </main>
    </div>
  );
};

export default App;
