import { legacy_createStore as configureStore, compose, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import rootReducer from './rootReducer'

const setupStore = () => {
    const composeEnhacers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose
    const enhancers = composeEnhacers(applyMiddleware(thunk))

    return configureStore(rootReducer(), enhancers)
}

export default setupStore