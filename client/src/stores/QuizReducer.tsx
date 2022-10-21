import { ACTIONS } from "./Actions";
import { GlobalState, ActionType } from "./stores.types";

const quizReducer = (state: GlobalState, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.ADD_COUNTER:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      };
    case ACTIONS.ADD_SCORE:
      return {
        ...state,
        userScore: state.userScore + 1,
      };
    case ACTIONS.SHOW_ANSWER:
      return {
        ...state,
        showAnswer: !state.showAnswer,
      };
    case ACTIONS.SHOW_RESULTS:
      return {
        ...state,
        showResults: !state.showResults,
      };
    case ACTIONS.RESET_QUIZ:
      return {
        ...state,
        showResults: false,
        showAnswer: false,
        counterValue: 0,
        userScore: 0,
      };
    default:
      return state;
  }
};

export default quizReducer;
