import React, {ReactElement} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Home, ProductDetail, ProductList} from "./pages";
import PublicLayout from "./layouts/Public/PublicLayout";

const Router = (): ReactElement => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicLayout/>}>
                        <Route path="" element={<Home/>}/>
                        <Route path="items" element={<ProductList/>}/>
                        <Route path="items/:id" element={<ProductDetail/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;