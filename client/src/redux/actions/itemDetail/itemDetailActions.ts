import {Action, ItemDetail} from "../../../types";
import {AxiosError} from "axios";
import {
    CLEAN_ITEM_DETAIL,
    LOAD_FAILURE_ITEM_DETAIL,
    LOAD_SUCCESS_ITEM_DETAIL,
    LOADING_ITEM_DETAIL
} from "./itemDetailActionTypes";

export const loadingItemDetail = (): Action => {
    return {
        type: LOADING_ITEM_DETAIL
    }
}

export const loadSuccessItemDetail = (itemDetail: ItemDetail): Action => {
    return {
        type: LOAD_SUCCESS_ITEM_DETAIL,
        payload: itemDetail
    }
}

export const loadErrorItemDetail = (error: AxiosError): Action => {
    return {
        type: LOAD_FAILURE_ITEM_DETAIL,
        payload: error
    }
}

export const cleanItemDetail = (): Action => {
    return  {
        type: CLEAN_ITEM_DETAIL
    }
}