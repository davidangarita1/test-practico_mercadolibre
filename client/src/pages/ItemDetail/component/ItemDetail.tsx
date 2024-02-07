import './ItemDetail.scss'
import React, {ReactElement} from 'react';
import useItemDetail from "../hook/useItemDetail";
import {CategoryList} from "../../../components";

export const ItemDetail = (): ReactElement => {
    const {itemList, itemDetail} = useItemDetail();

    return (
        <div className={"ItemDetail"}>
            <CategoryList categories={itemList.categories}/>
            <div className={"item"}>
                <div className={"characteristics"}>
                    <img src={itemDetail.item.picture} alt={itemDetail.item.title}/>
                    <div>
                        Descripción del producto
                        <p>{itemDetail.item.description}</p>
                    </div>
                </div>
                <div className={"details"}></div>
            </div>
        </div>
    );
};