import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App'

test('render of new characters', async () => {
  const wrapper = rtl.render(<App />);

  const newPeeps = await wrapper.findAllByAltText(/peep/i);

  expect(newPeeps[0]).toBeVisible();
});