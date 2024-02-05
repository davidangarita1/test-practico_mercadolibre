import {
    CLEAR_SEARCH,
    SEARCH_ITEMS
} from "../actions/search/actionTypesSearch";
import {Action} from "../../types";

const initialState = {
    search: "",
}

export const searchReducer = (state = initialState, {type, payload}: Action) => {
    switch (type) {
        case SEARCH_ITEMS: {
            return {
                ...state,
                search: payload
            };
        }
        case CLEAR_SEARCH: {
            return {
                ...state,
                search: ""
            };
        }
        default:
            return state;
    }
}