import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ProductDetail, ProductList} from "./pages";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/items" element={<ProductList/>}/>
                    <Route path="/items/:id" element={<ProductDetail/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;