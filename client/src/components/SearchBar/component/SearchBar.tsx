import './SearchBar.scss'
import React, {ReactElement} from 'react';
import useSearchBar from "../hook/useSearchBar";

import btnsearch from "../../../assets/img/search.png"
import {SEO} from "../../SEO/SEO";

export const SearchBar = (): ReactElement => {
    const {handleSubmit, handleKeyPress, handleChange, text, seoSearch} = useSearchBar()

    return (
        <div className={"SearchBar"}>
            <SEO title={seoSearch.title} description={seoSearch.description} />
            <div className="search">
                <input
                    type="text"
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e.key)}
                    placeholder="Nunca dejes de buscar"
                    data-testid={"input-search"}
                    value={text}
                />
                <button type="button" onClick={handleSubmit} data-testid={"btn-search"}>
                    <img src={btnsearch} alt={"Botón de búsqueda"}/>
                </button>
            </div>
        </div>
    );
};