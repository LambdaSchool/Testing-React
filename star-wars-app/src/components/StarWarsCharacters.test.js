import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarWarsCharacters from "./StarWarsCharacters.js";
import { getData as mockGetData } from "../api";
// import { shallow } from "enzyme";

jest.mock("../api");

// describe('testing the star wars data', () => {

test("render a set of Star Wars Characters names", async () => {
  mockGetData.mockResolvedValueOnce([]);
});

test("buttons re-render new page", async () => {
  mockGetData.mockResolvedValueOnce({
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        id: Date.now()
      }
    ],
    next: "nextPage",
    previous: "prevPage"
  });
  const { getByText } = render(<StarWarsCharacters />);

  const nextBtn = getByText(/next/i);
  const previousBtn = getByText(/previous/i);

  fireEvent.click(nextBtn);
  fireEvent.click(previousBtn);

  expect(mockGetData).toHaveBeenCalledTimes(0);

  wait(() => expect(getByText(/Luke/i).toBeInDocument()));
});

//   test('logo renders', () => {
//   const { getByAltText } = render(<App />);
//   getByAltText(/logo/i);
// });

// const { getAllByRole, getByText } = render(<StarWarsCharacters />);
// const twoBtns = getAllByRole('button');

// const previousBtn = getByText(/previous!/i);

// fireEvent(previousBtn);

// expect(mockGetData).toHaveBeenCalledTimes(1);

//   const nextBtn = getByText(/next/i);

// test("test test", () => {});

// test('render a set of Star Wars Characters names', async () => {

//   const { getByText } = render(<StarWarsCharacters />);

//   const previous = getByText(/Previous/i);

//   wait();
// });
