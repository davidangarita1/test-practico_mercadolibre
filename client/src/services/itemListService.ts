import axios, {AxiosResponse} from 'axios';
import {Dispatch} from "react";
import {loadErrorItemList, loadingItemList, loadSuccessItemList} from "../redux/actions";

import {API_URL} from "../utils/connection";

export const getItemList = (search: string) => (dispatch: Dispatch<any>): void => {
    dispatch(loadingItemList())

    const payload = {
        method: 'GET',
        url: `${API_URL}/items=search=${search}`,
        headers: { 'Content-Type': 'application/json' }
    }

    axios.request(payload).then((response: AxiosResponse) => {
        dispatch(loadSuccessItemList(response.data))
    }).catch((error) => loadErrorItemList(error.message))
}

