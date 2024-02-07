import './ItemCard.scss'
import React from 'react';
import car from '../../assets/img/car.png'
import {formatCurrency} from "../../utils/helpers";
import {Item} from "../../types";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearSearch} from "../../redux/actions/search/searchActions";

export const ItemCard = ({item}: { item: Item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearSearch())
        navigate(`/items/${item.id}`);
    }

    return (
        <div onClick={handleClick} className={"ItemCard"}>
            <figure className={"picture"}>
                <img src={item.picture} alt={item.title}/>
            </figure>
            <div className={"description"}>
                <div className={"price"}>
                    <span>{formatCurrency(item.price.amount)}</span>
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