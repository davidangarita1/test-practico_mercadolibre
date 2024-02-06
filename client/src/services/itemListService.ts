import axios, {AxiosResponse} from 'axios';

import {loadErrorItemList, loadingItemList, loadSuccessItemList} from "../redux/actions";

import {API_URL} from "../utils/connection";
import {Dispatch} from "react";

export const getItemList = (search: string) => (dispatch: Dispatch<any>): void => {
    dispatch(loadingItemList())

    const payload = {
        method: 'GET',
        url: `${API_URL}/search?q=${search}`,
        headers: { 'Content-Type': 'application/json' }
    }

    axios.request(payload).then((response: AxiosResponse) => {
        dispatch(loadSuccessItemList(response.data))
    }).catch((error) => loadErrorItemList(error.message))
}

