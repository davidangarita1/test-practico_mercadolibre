import './ItemList.scss'
import {ReactElement} from 'react';
import {Item} from "../../../types";

import useItemList from "../hook/useItemList";
import {CategoryList, ItemCard, SEO} from "../../../components";

export const ItemList = (): ReactElement => {
    const {itemList, isLoading, error, lastSearch} = useItemList();

    return (
        <>
            <SEO title={`${lastSearch} | Mercado Libre`} description={`Busquedas relacionadas con ${lastSearch}`}/>
            <div className={'ItemList'}>
                <CategoryList categories={itemList.categories}/>
                <div className={"items"}>
                    <span>
                        {isLoading && "Cargando items"}
                        {error && "Conexión fallida, vuelve a intentarlo más tarde"}
                        {
                            !isLoading &&
                            Array.isArray(itemList.items) &&
                            itemList.items.length === 0 && "No hay elementos para mostrar"
                        }
                    </span>
                    {Array.isArray(itemList.items) && itemList.items.length > 0 && !isLoading && (
                        <div>{
                            itemList.items.map((item: Item) => (
                                <ItemCard key={item.id} item={item}/>
                            ))
                        }</div>
                    )}
                </div>
            </div>

        </>
    );
};