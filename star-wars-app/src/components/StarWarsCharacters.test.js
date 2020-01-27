import React from 'react';
import { render, fireEvent, wait, waitForDomChange} from '@testing-library/react';
import { getData as mockGetData} from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api')

test('does character render correctly', async () =>{
    mockGetData.mockResolvedValueOnce({results : [{name:"Luke Skywalker", height: "173", mass: "77", hair_color: "blond", skin_color: "fair"}]})

    const {getByText} = render(<StarWarsCharacters/>);
    const previous = getByText(/previous/i);
    const next = getByText(/next/i);
    fireEvent.click(previous)
    expect(mockGetData).toHaveBeenCalledTimes(1);
    fireEvent.click(next)
    expect(mockGetData).toHaveBeenCalledTimes(2);
    wait();
})