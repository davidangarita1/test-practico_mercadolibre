import './PublicLayout.scss'
import React, {ReactElement} from 'react';
import {Outlet} from "react-router-dom";
import {Header, SEO} from "../../components";

const PublicLayout = (): ReactElement => {
    const seoLayout = {
        title: "Mercado Libre",
        description: "Compre productos con Envío Gratis en el día en Mercado Libre. Encuentre miles de marcas y productos a precios increíbles."
    }

    return (
        <>
            <SEO title={seoLayout.title} description={seoLayout.description} />
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default PublicLayout;