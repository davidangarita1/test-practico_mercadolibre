import {
    CLEAR_SEARCH,
    SET_SEARCH
} from "../actions/search/actionTypesSearch";
import {Action} from "../../types";

const initialState = {
    text: "",
}

export const searchReducer = (state = initialState, {type, payload}: Action) => {
    switch (type) {
        case SET_SEARCH: {
            return {
                ...state,
                text: payload
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