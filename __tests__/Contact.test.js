import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: "Contact us" });

  expect(heading).toBeInTheDocument();
});

test("Should load button component", () => {
  render(<Contact />);
  const button = screen.getByRole("button", { name: "Submit" });

  expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("Email");

  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(3);
});
