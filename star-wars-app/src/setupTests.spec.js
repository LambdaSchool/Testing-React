import React from "react";
import '@testing-library/jest-dom/extend-expect';
import StarWarsCharacters from "./components/StarWarsCharacters";
import { render, fireEvent, act,  waitForElement } from "@testing-library/react";
import axiosMock from "axios";

//TEST1
test('renders', () => {
    const { getByText } = render(<StarWarsCharacters />);

    act(() => {
      fireEvent.click(getByText("Next"));
    });
  });


//TEST 2
  it("does it", async () => {
    const { getByTestId } = render(<StarWarsCharacters  />);
  
    expect(getByTestId("prev")).toHaveTextContent("Previous");
  });



  //TEST 3
  it("is killing me slowly", async () => {
    axiosMock.get({ character: { name: "Luke Skywalker" } });
    const { getByTestId } = render(<StarWarsCharacters  />);
    
    const resolvedSpan = await waitForElement(() => getByTestId("resolved"));
   
    expect(resolvedSpan).toHaveTextContent("Luke Skywalker");
  });