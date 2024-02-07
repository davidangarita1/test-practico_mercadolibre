import {
    SET_SEARCH,
    CLEAR_SEARCH,
} from './actionTypesSearch'
import {UnknownAction} from "redux";

export const setSearch = (searchText: string): UnknownAction => {
    return {
        type: SET_SEARCH,
        payload: searchText
    }
}

export const clearSearch = (): UnknownAction => {
    return {type: CLEAR_SEARCH}
}

