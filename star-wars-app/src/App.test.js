import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axios from 'axios';

 jest.mock("axios", () => {
     return {
         get :jest.fn(() => Promise.resolve({
             data: {
                 results:[{name:"ANA",height:167}, {name:"Luck",height:67}]
             }
         }))
     }
 })
 test('made an api call', async () => {
    const wrapper = rtl.render(<App />);
    await wrapper.getAllByText(/next/i);
    expect(axios.get).toHaveBeenCalled(); 
  });

  test("render of character list", async () => {
      const wrapper =rtl.render(<App/>);
      const characterList = await wrapper.findAllByText(/Luck/i)
      expect(characterList[0]).toBeVisible();
  });

  test("next button", async () => {
      const wrapper = rtl.render(<App/>);
      await wrapper.findAllByText(/name/i);
      const nextBtn = wrapper.getByText(/next/i);
      rtl.act (() => {
           rtl.fireEvent.click(nextBtn);
      });
      expect(wrapper.queryByAltText(/name/i)).toBeNull();
  })