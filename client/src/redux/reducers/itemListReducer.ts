import {Action} from "../../types";
import {
    LOAD_FAILURE_ITEM_LIST,
    LOAD_SUCCESS_ITEM_LIST,
    LOADING_ITEM_LIST
} from "../actions/itemList/itemListActionTypes";

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const itemListReducer = (state = initialState, {type, payload}: Action) => {
    switch (type) {
        case LOADING_ITEM_LIST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case LOAD_SUCCESS_ITEM_LIST: {
            return {
                ...state,
                item: payload,
                isLoading: false
            };
        }
        case LOAD_FAILURE_ITEM_LIST: {
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        }
        default:
            return state;
    }
}