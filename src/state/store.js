import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import * as reducers from './ducks'

export default function configureStore(initialState = {}) {
    const rootReducer = combineReducers(reducers)
    const middleware = [thunk]
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger())
    }
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}