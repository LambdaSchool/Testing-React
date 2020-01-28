import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

test('renders page with list of characters and functioning previous/next buttons', async() => {
    mockGetData.mockResolvedValueOnce({ 
        results:[
        { name:'Luke Skywalker', url:'lukesurl'}
        ]
    });

    const { getByText } = render(<StarWarsCharacters />);
    const previousBtn = getByText(/previous/i);
    const nextBtn = getByText(/next/i);

    fireEvent.click(previousBtn);
    fireEvent.click(nextBtn);

    expect(mockGetData).toHaveBeenCalledTimes(1);
    
    await wait(() =>  expect(getByText(/luke/i)));

});