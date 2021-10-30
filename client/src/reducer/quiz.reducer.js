const reducer = (state, action) => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        showQuestion: !state.showQuestion,
        questionCount: state.questionCount + 1,
      };
    case "SUBMIT_ANSWER":
      return {
        ...state,
        showQuestion: !state.showQuestion,
        showAnswer: !state.showAnswer,
        userAnswer: action.userAnswerPayload,
        score: action.scorePayload,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        questionIdx: state.questionIdx + 1,
        questionCount: state.questionCount + 1,
        showQuestion: !state.showQuestion,
        showAnswer: !state.showAnswer,
      };
    case "SHOW_RESULTS":
      return {
        ...state,
        showQuestion: false,
        showAnswer: false,
        showResults: true,
      };
    case "RESTART":
      return {
        ...state,
        showResults: false,
        showQuestion: false,
        showAnswer: false,
        userAnswer: null,
        questionIdx: 0,
        score: 0,
        questionCount: 0,
      };
    default:
      return state;
  }
};

export default reducer;
