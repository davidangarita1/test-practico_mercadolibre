import './PublicLayout.scss'
import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../components";

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    );
};

export default PublicLayout;