import React from "react";
import { render, fireEvent, wait, getByText } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters.js";
import { getData as mockGetData } from "../api";
// import { shallow } from "enzyme";

jest.mock("../api");

// describe('testing the star wars data', () => {
test("render a set of Star Wars Characters names", async () => {
  mockGetData.mockResolvedValueOnce([]);

  const { getByText } = render(<StarWarsCharacters />);

  let previous = getByText(/Previous/i);

  wait(() => expect(getByText([url])));
});

// test("test test", () => {});

// test('render a set of Star Wars Characters names', async () => {

//   const { getByText } = render(<StarWarsCharacters />);

//   const previous = getByText(/Previous/i);

//   wait();
// });
