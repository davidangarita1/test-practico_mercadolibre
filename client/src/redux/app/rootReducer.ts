import {combineReducers} from 'redux';
import {itemDetailReducer, searchReducer, itemListReducer} from "../reducers";
import {} from "../reducers/itemListReducer";

const rootReducer = () => {
    return combineReducers({
        search: searchReducer,
        itemDetail: itemDetailReducer,
        itemList: itemListReducer
    })
}
export default rootReducer