import {ItemList} from "../../../types";
import {
    CLEAN_ITEM_LIST,
    LOAD_FAILURE_ITEM_LIST,
    SET_ITEM_LIST,
    LOADING_ITEM_LIST
} from "./itemListActionTypes";
import {Action} from "../../../types";
import {AxiosError} from "axios";
import {UnknownAction} from "redux";

export const loadingItemList = (): Action => {
    return {
        type: LOADING_ITEM_LIST
    }
}

export const setItemList = (itemList: ItemList): Action => {
    return {
        type: SET_ITEM_LIST,
        payload: itemList
    }
}

export const loadErrorItemList = (error: AxiosError): Action => {
    return {
        type: LOAD_FAILURE_ITEM_LIST,
        payload: error
    }
}
export const cleanItemList = (): UnknownAction => {
    return {
        type: CLEAN_ITEM_LIST,
        payload: []
    }
}