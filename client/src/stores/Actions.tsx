export const ACTIONS = {
  ADD_COUNTER: "ADD_COUNTER",
  ADD_SCORE: "ADD_SCORE",
  SHOW_ANSWER: "SHOW_ANSWER",
  SHOW_RESULTS: "SHOW_RESULTS",
  RESET_QUIZ: "RESET_QUIZ",
};

export const addCounter = () => {
  return { type: "ADD_COUNTER" };
};
export const resetQuiz = () => {
  return { type: "RESET_QUIZ" };
};

export const addScore = () => {
  return { type: "ADD_SCORE" };
};

export const showAnswer = () => {
  return { type: "SHOW_ANSWER" };
};

export const showResults = () => {
  return { type: "SHOW_RESULTS" };
};
