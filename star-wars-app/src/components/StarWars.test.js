import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { getData } from "../api";
import StarWarsCharacters from "./StarWarsCharacters";

jest.mock("../api");

test("renders list of character from Star Wars films, allows user to skip to the next character or previous character in a list array", async () => {
  const { getByTestId } = render(<StarWarsCharacters />);

  const previousBtn = getByTestId(/previouschar/i);
  const nextBtn = getByTestId(/nextchar/i);

  fireEvent.click(previousBtn);
  fireEvent.click(nextBtn);

  expect(getData).toHaveBeenCalledTimes(1);
});