import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App'

test('render of new characters', async () => {
  const wrapper = rtl.render(<App />);
  await wrapper.findAllByAltText(/peep/);

  const next = wrapper.getByText(/next/i);

  rtl.act(()=>{
    rtl.fireEvent.click(next);
  });

  expect(wrapper.queryByAltText(/peep/i)).toBeNull();
});

// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import App from "./App";     

// test('loads new characters', async () => {
//   const { findAllByAltText } = render(<App />)

//   // Click button
//   fireEvent.click(findAllByAltText(/peep/i))

//   // Wait for page to update with query text
//   const char = await findAllByAltText(/peep/i)
//   expect(char).toBe(/peep/i)
// })