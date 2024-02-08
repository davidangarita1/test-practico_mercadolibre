import React from 'react';
import { screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {Currency} from "./Currency";
import {renderWithProviders} from "../../utils/utils-for-tests";


describe('<Currency />', () => {
    const setup = (value: number): void => {
        renderWithProviders(
            <MemoryRouter>
                <Currency value={value} />
            </MemoryRouter>
        )
    };

    test('Render successfully', (): void => {
        setup(2000);

        expect(screen.getByText("$ 2.000")).toBeInTheDocument();
    });

    test('Show formated big value', (): void => {
        setup(2000000);

        expect(screen.getByText("$ 2.000.000")).toBeInTheDocument();
    });
})