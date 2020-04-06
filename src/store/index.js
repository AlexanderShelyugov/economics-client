import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'

const initialState = {
    entities: {
        warehouses: {
            byId: {},
            allIds: []
        }
    },
    clientArea: {
        warehouses: {
            isFetching: false,
            invalidating: false,
            message: null
        }
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