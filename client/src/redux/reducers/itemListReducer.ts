import {ItemList} from "../../types";
import {
    CLEAN_ITEM_LIST,
    LOAD_FAILURE_ITEM_LIST,
    SET_ITEM_LIST,
    LOADING_ITEM_LIST
} from "../actions/itemList/itemListActionTypes";

const initialState = {
    itemList: {
        author: {
            name: "",
            lastname: ""
        },
        categories: [],
        items: []
    },
    isLoading: false,
    error: null
}

export const itemListReducer = (state = initialState, {type, payload}: { type: string, payload: ItemList }) => {
    switch (type) {
        case LOADING_ITEM_LIST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case SET_ITEM_LIST: {
            return {
                ...state,
                itemList: payload,
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
        case CLEAN_ITEM_LIST: {
            return {
                ...state,
                isLoading: true,
                itemList: payload,
            }
        }
        default:
            return state;
    }
}