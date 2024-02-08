import React from 'react';
import {Helmet} from "react-helmet";
import {Item} from "../../types";

import logo from "./../../assets/img/logo.png";

interface SeoProps {
    title: string,
    description: string,
    url?: string,
    item?: Item
}

export const SEO = ({ title, description, url, item}: SeoProps) => {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={logo}/>
                <meta name="description" content={description}/>
                <title>{title}</title>
            </Helmet>
            {item && (
                <Helmet>
                    <meta property="og:description" content={item.description} data-head-react="true"/>
                    <meta property="og:image" content={item.picture} data-head-react="true"/>
                    <meta property="og:title" content={item.title} data-head-react="true"/>
                    <meta property="og:type" content="meli-co:product" data-head-react="true"/>
                    <meta property="og:url" content={url} data-head-react="true"/>

                    <meta name="twitter:card" content="product" data-head-react="true"/>
                    <meta name="twitter:image" content={item.picture} data-head-react="true"/>
                    <meta name="twitter:site" content="Mercado Libre" data-head-react="true"/>
                    <meta name="twitter:title" content={item.title} data-head-react="true"/>
                    <meta name="twitter:description" content={item.description} data-head-react="true"/>
                    <meta name="twitter:domain" content="mercadolibre.com.co" data-head-react="true"/>

                    <meta name="al:android:url" property="al:android:url" content={`meli://item?id=${item.id}`}
                          data-head-react="true"/>
                    <meta name="al:android:app_name" property="al:android:app_name" content="Mercado Libre"
                          data-head-react="true"/>
                    <meta name="al:android:package" property="al:android:package" content="com.mercadolibre"
                          data-head-react="true"/>

                    <meta name="al:iphone:url" property="al:ios:url" content={`meli://item?id=${item.id}`}
                          data-head-react="true"/>
                    <meta name="al:iphone:app_name" property="al:ios:app_name" content="Mercado Libre"
                          data-head-react="true"/>
                    <meta name="al:iphone:app_store_id" property="al:ios:app_store_id" content={item.id}
                          data-head-react="true"/>
                </Helmet>
            )}
        </>
    );
};