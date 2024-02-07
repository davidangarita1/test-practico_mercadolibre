import React from 'react';
import {fireEvent, screen } from '@testing-library/react';

import {MemoryRouter} from 'react-router-dom';

import {SearchBar} from './SearchBar';
import {renderWithProviders} from "../../../utils/utils-for-tests";

describe('<SearchBar />', () => {
    const setup = (): void => {
        renderWithProviders(
            <MemoryRouter>
                <SearchBar/>
            </MemoryRouter>
        )
    };

    test('Render successfully', (): void => {
        setup();

        const inputSearch = screen.getByPlaceholderText(/Nunca dejes de buscar/i);

        expect(inputSearch).toBeInTheDocument();
    });

    test('Updates input value when typing', async (): Promise<void> => {
        setup();

        const inputSearch = screen.getByTestId(/input-search/i) as HTMLInputElement;
        fireEvent.change(inputSearch, {target: {value: "Xiaomi"}});

        expect(inputSearch.value).toBe('Xiaomi');
    });
})