import React, { useContext, useState, useEffect } from "react";
import Start from "./pages/Start";
import Results from "./pages/Results";
import Counter from "./components/Counter";
import MainHeader from "./components/MainHeader";
import QuestionPage from "./pages/QuestionPage";
import CorrectAnswerPage from "./pages/CorrectAnswerPage";
import { QuizContext } from "./context/quiz.context";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const { questionIdx } = useContext(QuizContext);

  //questionIdx initialVal starts from 0 to grab first question from questions array
  //after question is answered by user, questionIdx + 1 to render the next question
  const getSingleQuestion = questions[questionIdx];
  const getTotalQuestions = questions.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //proxy set to localhost:8000 in client/package.json to fetch data in development
        const res = await axios.get("/api/quiz");
        //get returns a res object {data: ... , status: ... , headers: ..., etc...}
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
        <QuestionPage getSingleQuestion={getSingleQuestion} />
        <CorrectAnswerPage
          getSingleQuestion={getSingleQuestion}
          getTotalQuestions={getTotalQuestions}
        />
        <Results getTotalQuestions={getTotalQuestions} />
      </main>
    </div>
  );
};

export default App;
