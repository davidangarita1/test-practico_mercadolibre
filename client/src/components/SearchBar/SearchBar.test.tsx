import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';


describe('<SearchBar />', () => {
    const setup = () => render(<SearchBar />);

    test('Render successfully', () => {
        setup();

        const linkElement = screen.getByText(/Search bar/i);

        expect(linkElement).toBeInTheDocument();
    });
})