import { render, screen } from "@testing-library/react";
import MainHeader from "../components/MainHeader";
import "@testing-library/jest-dom/extend-expect";

describe("Testing Main Header", () => {
  test("check if component renders image", () => {
    render(<MainHeader />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });
});
