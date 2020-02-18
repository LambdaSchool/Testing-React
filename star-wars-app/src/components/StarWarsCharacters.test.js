import React from 'react';
import * as rtl from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

test('Star Wars Characters are rendered and clicking prev and next button have intended affect', async () => {
    mockGetData.mockResolvedValueOnce({
        results: [{
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male"
        }]
    });
    const { getByText } = rtl.render(<StarWarsCharacters />);

    const prevBtn = getByText(/previous/i);
    const nextBtn = getByText(/next/i);

    rtl.fireEvent.click(nextBtn);
    rtl.fireEvent.click(prevBtn);

    expect(mockGetData).toHaveBeenCalledTimes(1);

    rtl.waitForDomChange();
});