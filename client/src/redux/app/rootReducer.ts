import {combineReducers} from 'redux';
import {itemDetailReducer, searchReducer, itemListReducer} from "../reducers";

const rootReducer = () => {
    return combineReducers({
        search: searchReducer,
        itemDetail: itemDetailReducer,
        itemList: itemListReducer
    })
}
export default rootReducer