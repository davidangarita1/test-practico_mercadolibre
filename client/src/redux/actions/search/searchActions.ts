import {
    SEARCH_ITEMS,
    CLEAR_SEARCH,
} from './actionTypesSearch'
import {Action} from "../../../types";

export const searchItems = (search: string): Action => {
    return {
        type: SEARCH_ITEMS,
        payload: search
    }
}

export const clearSearch = (): Action => {
    return {type: CLEAR_SEARCH}
}

