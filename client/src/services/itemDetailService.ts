import {Dispatch} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";

import {API_URL} from "../utils/connection";
import {
    loadErrorItemDetail,
    loadingItemDetail,
    loadSuccessItemDetail
} from "../redux/actions";


export const getItemDetail = (id: string) => (dispatch: Dispatch<any>): void => {
    dispatch(loadingItemDetail())

    const payload = {
        method: 'GET',
        url: `${API_URL}/items/${id}`,
        headers: {'Content-Type': 'application/json'}
    }

    axios.request(payload).then((response: AxiosResponse) => {
        dispatch(loadSuccessItemDetail(response.data))
    }).catch((error) => loadErrorItemDetail(error.message))
}