import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ItemListService from "../../../services/ItemService";
import {loadErrorItemList, loadingItemList, setItemList} from "../../../redux/actions";
import {AxiosResponse} from "axios";

import itemListMock from '../../../data/itemListMock.json'

const useProductList = () => {
    const dispatch: any = useDispatch();
    const {searchText} = useSelector((state: { search: { searchText: string } }) => state.search);
    const {itemList, isLoading, error} = useSelector((state: { itemList: any }) => state.itemList);

    const lastSearch: string | null = sessionStorage.getItem('lastSearch')

    useEffect(() => {
        dispatch(setItemList(itemListMock));
        // getItemList(lastSearch ?? searchText);
    }, [searchText])

    const getItemList = (text: string) => {
        dispatch(loadingItemList())
        ItemListService.getItemList(text).then((response: AxiosResponse) => {
            dispatch(setItemList(response.data));
        }).catch((error) => loadErrorItemList(error.message));
    }

    return {
        itemList,
        isLoading,
        error
    }
};

export default useProductList;