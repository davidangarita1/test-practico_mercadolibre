import './PublicLayout.scss'
import React, {ReactElement} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../components";

const PublicLayout = (): ReactElement => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    );
};

export default PublicLayout;