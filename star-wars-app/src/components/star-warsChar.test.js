import React from 'react';
import { render } from '@testing-library/react';

import App from './../App';

test('does logo render', () => {
    const { getByAltText } = render(<App />);
    getByAltText(/logo/i);
});

test('do buttons render', () => {
    const { getByTestId } = render(<App />);
    getByTestId('next');
    getByTestId('prev');
});
