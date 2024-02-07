import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemDetail } from './ItemDetail';


describe('<ItemDetail />', () => {
    const setup = () => render(<ItemDetail />);

    test('Render successfully', () => {
        setup();

        const linkElement = screen.getByText(/Item detail/i);

        expect(linkElement).toBeInTheDocument();
    });
})
