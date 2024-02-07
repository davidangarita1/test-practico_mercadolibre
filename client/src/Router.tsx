import React, {ReactElement} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {HomePage, ItemDetail, ItemList} from "./pages";
import PublicLayout from "./layouts/Public/PublicLayout";

const Router = (): ReactElement => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicLayout/>}>
                        <Route path="" element={<HomePage/>}/>
                        <Route path="items" element={<ItemList/>}/>
                        <Route path="items/:id" element={<ItemDetail/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;