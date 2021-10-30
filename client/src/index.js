import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { QuizProvider } from "./context/quiz.context";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <QuizProvider>
      <App />
    </QuizProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
