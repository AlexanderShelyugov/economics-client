import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'

const initialState = {
    warehouses: {
        items: []
    }
}


const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

export function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}