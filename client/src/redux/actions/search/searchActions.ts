import {
    SET_SEARCH,
    CLEAR_SEARCH,
} from './actionTypesSearch'
import {Action} from "../../../types";

export const setSearch = (search: string): Action => {
    return {
        type: SET_SEARCH,
        payload: search
    }
}

export const clearSearch = (): Action => {
    return {type: CLEAR_SEARCH}
}

