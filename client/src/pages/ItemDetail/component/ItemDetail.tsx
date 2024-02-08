import './ItemDetail.scss'
import React, {ReactElement} from 'react';
import useItemDetail from "../hook/useItemDetail";
import {CategoryList, Currency, SEO} from "../../../components";

export const ItemDetail = (): ReactElement => {
    const {itemList, itemDetail} = useItemDetail();

    return (
        <div className={"ItemDetail"}>
            <SEO
                title={itemDetail?.item.title}
                description={itemDetail?.item.description}
                url={window.location.pathname}
                item={itemDetail?.item} />
            {Array.isArray(itemList.categories) && <CategoryList categories={itemList.categories}/>}
            {itemDetail && (
                <div className={"item"}>
                    <figure className={"picture"}>
                        <img src={itemDetail.item.picture} alt={itemDetail.item.title}/>
                    </figure>

                    <div className={"details"}>
                        <div className={"condition"}>
                            {`${itemDetail.item.condition} - ${itemDetail.item.sold_quantity} vendidos`}
                        </div>
                        <div className={"title"}>{itemDetail.item.title}</div>
                        <Currency value={itemDetail.item.price.amount}/>
                        <button className={'btnBuy'}>Comprar</button>
                    </div>

                    <div className={"description"}>
                        <span>Descripción del producto</span>
                        <p>{itemDetail.item.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};