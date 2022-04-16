import { createContext, useReducer } from "react";
import reducer from "../reducer/quiz.reducer";

const initialState = {
  showQuestion: false,
  showAnswer: false,
  showResults: false,
  userAnswer: null,
  score: 0,
  questionIdx: 0,
  questionCount: 0,
};

export const QuizContext = createContext();
export const DispatchContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    //you can pass in both state, dispatch to one provider by [state, dispatch]
    //they can be accessed in the child components
    <QuizContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </QuizContext.Provider>
  );
};
