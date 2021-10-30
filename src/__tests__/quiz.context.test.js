import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./../components/Counter/index";
import Start from "../pages/Start";
import { QuizProvider } from "./../context/quiz.context";

const renderCounter = (component) => {
  return render(
    //QuizProvider is active- returns dispatch function
    //QuizProvider renders the provider with a value, so no value is passed in
    <QuizProvider>{component}</QuizProvider>
  );
};

describe("Test Counter with Start Component", () => {
  const component = (
    <>
      <Counter />
      <Start />
    </>
  );

  it("initial counter starts at 0", () => {
    const { getByText } = renderCounter(component);
    expect(getByText(/question/i)).toHaveTextContent("0/10");
    expect(getByText(/score/i)).toHaveTextContent("0/10");
  });
  it("start quiz button increments the question #", () => {
    const { getByRole, getByText, unmount } = renderCounter(component);
    fireEvent.click(getByRole("button"));
    expect(getByText(/question/i)).toHaveTextContent("1/10");
    unmount();
  });
  it("start quiz button hides start page", async () => {
    const { getByRole } = renderCounter(component);
    const startButton = getByRole("button");
    fireEvent.click(startButton);
    expect(startButton).not.toBeInTheDocument();
  });
});
