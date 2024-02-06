import {Action, Item} from "../../../types";
import {AxiosError} from "axios";
import {LOAD_FAILURE_ITEM_DETAIL, LOAD_SUCCESS_ITEM_DETAIL, LOADING_ITEM_DETAIL} from "./itemDetailActionTypes";

export const loadingItemDetail = (): Action => {
    return {
        type: LOADING_ITEM_DETAIL
    }
}

export const loadSuccessItemDetail = (item: Item): Action => {
    return {
        type: LOAD_SUCCESS_ITEM_DETAIL,
        payload: {
            item
        }
    }
}

export const loadErrorItemDetail = (error: AxiosError): Action => {
    return {
        type: LOAD_FAILURE_ITEM_DETAIL,
        payload: error
    }
}