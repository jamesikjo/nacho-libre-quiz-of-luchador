import React, {
  createContext,
  useReducer,
  ReactNode,
  ReactElement,
} from "react";
import { GlobalState, ContextType } from "./stores.types";
import quizReducer from "../stores/QuizReducer";

// React Context-based Global Store with a reducer

const initialState: GlobalState = {
  showResults: false,
  showAnswer: false,
  userScore: 0,
  counterValue: 0,
};

export const QuizContext = createContext({} as ContextType);

export const QuizProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [quizState, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ quizState, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
