import {ItemList} from "../../../types";
import {LOAD_FAILURE_ITEM_LIST, LOAD_SUCCESS_ITEM_LIST, LOADING_ITEM_LIST} from "./itemListActionTypes";
import {Action} from "../../../types";
import {AxiosError} from "axios";

export const loadingItemList = (): Action => {
    return {
        type: LOADING_ITEM_LIST
    }
}

export const loadSuccessItemList = (items: ItemList): Action => {
    return {
        type: LOAD_SUCCESS_ITEM_LIST,
        payload: {
            items
        }
    }
}

export const loadErrorItemList = (error: AxiosError): Action => {
    return {
        type: LOAD_FAILURE_ITEM_LIST,
        payload: error
    }
}