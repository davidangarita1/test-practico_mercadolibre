import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {AxiosResponse} from "axios";
import {loadErrorItemDetail, loadingItemDetail, loadSuccessItemDetail} from "../../../redux/actions";
import ItemService from "../../../services/ItemService";

const useItemDetail = () => {
    const dispatch: any = useDispatch();
    const {itemList} = useSelector((state: any) => state.itemList);
    const {itemDetail, isLoading, error} = useSelector((state: any) => state.itemDetail);

    const id: string = window.location.pathname.replace('/items/', '')

    useEffect(() => {
        // dispatch(loadSuccessItemDetail(itemDetailMock));
        getItemDetail(id);
    }, [])

    const getItemDetail = (id: string): void => {
        dispatch(loadingItemDetail())
        ItemService.getItemDetail(id).then((response: AxiosResponse) => {
            dispatch(loadSuccessItemDetail(response.data));
        }).catch((error: any) => loadErrorItemDetail(error.message));
    }

    return {
        itemList,
        itemDetail,
        isLoading,
        error
    }
};

export default useItemDetail;