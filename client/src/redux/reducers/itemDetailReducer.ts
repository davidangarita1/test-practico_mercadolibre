import {
    CLEAN_ITEM_DETAIL,
    LOAD_FAILURE_ITEM_DETAIL,
    LOAD_SUCCESS_ITEM_DETAIL,
    LOADING_ITEM_DETAIL
} from "../actions/itemDetail/itemDetailActionTypes";
import {Action} from "../../types";

const initialState = {
    itemDetail: null,
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
                itemDetail: payload,
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
        case CLEAN_ITEM_DETAIL: {
            return {
                ...state,
                itemDetail: null,
                isLoading: true,
            }
        }
        default:
            return state;
    }
}