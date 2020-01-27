import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import {getData as mockGetData} from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

test('renders the list of characters', async () => {
mockGetData.mockResolvedValueOnce({
    id: 1,
    next: "https://swapi.co/api/people/?page=2",
    results: [
        {
            name: "Luke Skywalker",
            url: "test"
        }
    ],
    id: 9,
    previous: "https://swapi.co/api/people/?page=8",
    results: [
        {
            name: "Tion Medon",
            url: "test"
        }
    ]
});

})

