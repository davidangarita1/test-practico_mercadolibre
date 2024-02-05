import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductDetail } from './ProductDetail';


describe('<ProductDetail />', () => {
    const setup = () => render(<ProductDetail />);

    test('Render successfully', () => {
        setup();

        const linkElement = screen.getByText(/Item detail/i);

        expect(linkElement).toBeInTheDocument();
    });
})
