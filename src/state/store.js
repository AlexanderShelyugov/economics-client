import { enableMapSet } from 'immer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import * as reducers from './ducks'

let store

function configureStore(initialState = {}) {
    enableMapSet()
    const rootReducer = combineReducers(reducers)
    const middleware = [thunk]
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger())
    }
    store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
    return store
}

export function getStore() {
    return store
}

export default configureStore