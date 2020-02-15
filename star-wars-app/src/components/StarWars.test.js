import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { getData as mockGetData } from "../api";
import StarWarsCharacters from "./StarWarsCharacters";


test("buttons render, character renders", async() => {
    const { getByText } = render(<StarWarsCharacters/>);

    const nextButton = getByText(/Next/i);
    fireEvent.click(nextButton);

    const previousButton = getByText(/Previous/i);
    fireEvent.click(previousButton);

    await wait (() => expect(getByText(/luke/i)));
    await wait (() => expect(getByText(/Next/i)));
    await wait (() => expect(getByText(/Previous/i)));
});

