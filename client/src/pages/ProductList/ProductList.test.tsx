import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProductList} from './ProductList';


describe('<ProductList />', () => {
    const setup = () => render(<ProductList />);

    test('Render successfully', () => {
        setup();

        const linkElement = screen.getByText(/Item list/i);

        expect(linkElement).toBeInTheDocument();
    });
})