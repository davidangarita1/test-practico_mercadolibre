import React from 'react';
import { render, screen } from '@testing-library/react';
import {ItemList} from './ItemList';

describe('<ItemList />', () => {
    const setup = () => render(<ItemList />);

    test('Render successfully', () => {
        setup();

        const linkElement = screen.getByText(/Item list/i);

        expect(linkElement).toBeInTheDocument();
    });
})