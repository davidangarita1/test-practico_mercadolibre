import {ReactElement} from "react";

import {Provider} from "react-redux";
import setupStore from "../redux/app/store";
import {render} from "@testing-library/react";


export const renderWithProviders = (
    ui: ReactElement,
    {
        preloadedState = {},
        store = setupStore(),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({children}: { children: ReactElement }) => {
        return <Provider store={store}>{children}</Provider>
    }
    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}