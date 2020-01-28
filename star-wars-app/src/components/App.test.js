import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api/getData';
import StarWarsCharacters from './StarWarsCharacters';

// jest.mock('../getData');
  test('a previous button and a next button, character renders', async () => {

    // mockGetData.mockResolvedValueOnce({ results: [{ name: 'R2-D2' }] });
    // render(<StarWarsCharacters />);
    // expect(mockGetData).toHaveBeenCalledTimes(1)
    

    const { getByText} = render(<StarWarsCharacters/>);
    const previousButton = getByText(/previous/i);
    fireEvent.click(previousButton);
    const nextButton = getByText(/next/i);
    fireEvent.click(nextButton);
  
  
    await wait(() => expect(getByText(/next/i)));
    await wait(() => expect(getByText(/previous/i)));
  });
  

  
  