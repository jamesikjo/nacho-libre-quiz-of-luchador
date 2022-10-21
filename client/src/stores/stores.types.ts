import { Dispatch } from "react";

export type GlobalState = {
  counterValue: number;
  userScore: number;
  showAnswer: boolean;
  showResults: boolean;
};

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  quizState: GlobalState;
  dispatch: Dispatch<ActionType>;
};
