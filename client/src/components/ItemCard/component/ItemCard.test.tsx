import React from 'react';
import { screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {ItemCard} from "./ItemCard";
import {renderWithProviders} from "../../../utils/utils-for-tests";

import {Item} from "../../../types";

import itemListMock from '../../../data/itemListMock.json'

describe('<ItemCard />', () => {
    const setup = (item: Item): void => {
        renderWithProviders(
            <MemoryRouter>
                <ItemCard item={item} />
            </MemoryRouter>
        )
    };

    test("Render Render successfully", () => {
        setup(itemListMock['items'][0]);

        const title = screen.getByText(/Xiaomi Redmi Note 11 4gb Ram 128gb Rom Color Gris Grafito/);
        expect(title).toBeInTheDocument()
    });

    test("Show price and title", () => {
        setup(itemListMock['items'][1]);

        const title = screen.getByText(/Xiaomi Redmi 10c Dual Sim 128gb 4gb Ram Ocean Blue/);
        const price = screen.getByText('$ 249.999');

        expect(title).toBeInTheDocument();
        expect(price).toBeInTheDocument();
    });
})