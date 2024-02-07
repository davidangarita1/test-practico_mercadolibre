import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {setSearch} from "../../redux/actions/search/searchActions";

export const CategoryList = ({categories}: { categories: string[] }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirect = (text: string): void => {
        dispatch(setSearch(text));
        sessionStorage.setItem('lastSearch', `${text}`)
        navigate(`/items?search=${text}`);
    };

    const isTheLastCategory = (index: number): boolean => index === categories.length - 1

    return (
        <div className={"categories"}>
            {Array.isArray(categories) && categories.map((category, index) => (
                <span onClick={() => redirect(category)} key={index}
                      className={isTheLastCategory(index) ? 'dark' : 'normal'}>
                    {`${category}`}
                    {!isTheLastCategory(index) && (<svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                        <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                    </svg>)}
                </span>
            ))}
        </div>
    );
};