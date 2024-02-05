import {
    LOAD_FAILURE_ITEM_DETAIL,
    LOAD_SUCCESS_ITEM_DETAIL,
    LOADING_ITEM_DETAIL
} from "../actions/itemDetail/itemDetailActionTypes";
import {Action} from "../../types";

const initialState = {
    item: null,
    isLoading: false,
    error: null
}

export const itemDetailReducer = (state = initialState, {type, payload}: Action) => {
    switch (type) {
        case LOADING_ITEM_DETAIL: {
            return {
                ...state,
                isLoading: true
            };
        }
        case LOAD_SUCCESS_ITEM_DETAIL: {
            return {
                ...state,
                item: payload,
                isLoading: false
            };
        }
        case LOAD_FAILURE_ITEM_DETAIL: {
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