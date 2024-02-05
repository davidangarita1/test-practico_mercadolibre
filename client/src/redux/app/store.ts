import { legacy_createStore as createStore, compose } from 'redux'
import rootReducer from './rootReducer'

const configureStore = () => {
    const composeEnhacers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose
    return createStore(rootReducer(), composeEnhacers)
}

export default configureStore