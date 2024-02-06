// @ts-nocheck
import './SearchBar.scss'
import React, {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {setSearch} from "../../redux/actions/search/searchActions";

import btnsearch from "../../assets/img/search.png"

export const SearchBar = (): ReactElement => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {text} = useSelector((state) => state.search);

    const redirect = (): void => navigate(`/items?search=${text}`);

    const handleSubmit = (): void => text !== '' && redirect();

    const handleKeyPress = (key: string): void => key === 'Enter' && text !== '' && redirect();

    const handleChange = (value: string): void => dispatch(setSearch(value));

    return (
        <div className={"SearchBar"}>
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