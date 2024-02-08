import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ItemService from "../../../services/ItemService";
import {loadErrorItemList, loadingItemList, setItemList} from "../../../redux/actions";
import {AxiosResponse} from "axios";

const useItemList = () => {
    const dispatch: any = useDispatch();
    const {searchText} = useSelector((state: { search: { searchText: string } }) => state.search);
    const {itemList, isLoading, error} = useSelector((state: { itemList: any }) => state.itemList);

    const currentSearch : string = window.location.search.replace('?search=', '')

    useEffect(() => {
        // dispatch(setItemList(itemListMock));
        getItemList(currentSearch ?? searchText);
    }, [searchText])

    const getItemList = (text: string): void => {
        dispatch(loadingItemList())
        ItemService.getItemList(text).then((response: AxiosResponse) => {
            dispatch(setItemList(response.data));
        }).catch((error) => loadErrorItemList(error.message));
    }

    return {
        itemList,
        isLoading,
        error,
        currentSearch
    }
};

export default useItemList;