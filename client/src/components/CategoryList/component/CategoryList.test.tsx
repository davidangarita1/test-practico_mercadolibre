import React from 'react';
import { screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {CategoryList} from "./CategoryList";
import {renderWithProviders} from "../../../utils/utils-for-tests";

const categories = [
    "Celulares y Teléfonos",
    "Celulares y Smartphones"
]

describe('<CategoryList />', () => {
    const setup = (newCategory?: string): void => {
        renderWithProviders(
            <MemoryRouter>
                <CategoryList categories={newCategory ? [...categories, newCategory] : categories} />
            </MemoryRouter>
        )
    };

    test('Render successfully', (): void => {
        setup();

        expect(screen.getByText(/Celulares y Teléfonos/i)).toBeInTheDocument();
    });

    test('Show new category added', (): void => {
        setup('Ipone');

        expect(screen.getByText(/Celulares y Teléfonos/i)).toBeInTheDocument();
        expect(screen.getByText(/Ipone/i)).toBeInTheDocument();
    });
})