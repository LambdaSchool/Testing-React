import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters.js";
import { getData as mockGetData } from "../api/getData";
import React from "react";

test(' render a previous button and a next button, character renders', async () => {
    const { getByText} = render(<StarWarsCharacters/>);
    const previousButton = getByText(/previous/i);
    fireEvent.click(previousButton);
    const nextButton = getByText(/next/i);
    fireEvent.click(nextButton);


    await wait(() => expect(getByText(/next/i)));
    await wait(() => expect(getByText(/previous/i)));
  });