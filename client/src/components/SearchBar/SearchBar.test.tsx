import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';

import {SearchBar} from './SearchBar';

const mockStore = configureStore([]);

describe('<SearchBar />', () => {
    const store = mockStore({search: {text: ''}});
    const setup = (): void => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchBar/>
                </MemoryRouter>
            </Provider>
        )
    };

    test('Render successfully', (): void => {
        setup();

        const inputSearch = screen.getByPlaceholderText(/Nunca dejes de buscar/i);

        expect(inputSearch).toBeInTheDocument();
    });

    test('Updates input value when typing', async(): Promise<void> => {
        setup();

        const inputSearch = screen.getByTestId(/input-search/i) as HTMLInputElement;
        fireEvent.change(inputSearch, {target: {value: "Xiaomi"}});

        await waitFor(() => {
            expect(inputSearch.value).toBe('Xiaomi');
        });
    });
})