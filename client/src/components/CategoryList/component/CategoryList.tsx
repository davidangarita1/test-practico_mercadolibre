import './CategoryList.scss'
import React, {ReactElement} from 'react';
import {ArrowIcon} from "../../index";
import useCategoryList from "../hook/useCategoryList";

interface CategoryListProps {
    categories: string[]
}

export const CategoryList = ({categories}: CategoryListProps): ReactElement => {
    const {redirect, isTheLastCategory} = useCategoryList(categories);

    return (
        <div className={"CategoryList"}>
            {Array.isArray(categories) && categories.map((category, index) => (
                <span onClick={() => redirect(category)} key={index}
                      className={isTheLastCategory(index) ? 'dark' : 'normal'}>
                    {`${category}`}
                    {!isTheLastCategory(index) && (<ArrowIcon/>)}
                </span>
            ))}
        </div>
    );
};