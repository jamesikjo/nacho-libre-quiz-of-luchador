import { createContext, useReducer } from "react";
import reducer from "../reducer/quiz.reducer";

const initialState = {
  showQuestion: false,
  showAnswer: false,
  showResults: false,
  userAnswer: null,
  score: 0,
  questionIdx: 0,
  questionNumber: 0,
};

export const QuizContext = createContext();
export const DispatchContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </QuizContext.Provider>
  );
};
