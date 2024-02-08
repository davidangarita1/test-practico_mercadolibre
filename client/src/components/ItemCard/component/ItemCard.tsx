import './ItemCard.scss'
import React, {ReactElement} from 'react';
import car from '../../../assets/img/car.png'

import {Item} from "../../../types";
import useItemCard from "../hook/useItemCard";
import {formatCurrency} from "../../../utils/helpers";

interface ItemCardProps {
    item: Item
}

export const ItemCard = ({item}: ItemCardProps): ReactElement => {
    const {handleClick} = useItemCard(item);

    return (
        <div onClick={handleClick} className={"ItemCard"}>
            <figure className={"picture"}>
                <img src={item.picture} alt={item.title}/>
            </figure>
            <div className={"description"}>
                <div className={"price"}>
                    <span>{formatCurrency(item.price.amount).split(',')[0]}</span>
                    {item.free_shipping && (
                        <span>
                            <img src={car} alt={"Envio gratis"}/>
                        </span>
                    )}
                </div>
                <span className={"title"}>{item.title}</span>
            </div>
            <div className={"location"}>
                <span>Capital Federal</span>
            </div>
        </div>
    );
};