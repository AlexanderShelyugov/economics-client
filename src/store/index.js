import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'

const initialState = {
    warehouses: {
        items: [
            {
                name: "Warehouse 1",
                latitude: 100,
                longitude: 500
            },
            {
                name: "Warehouse 2",
                latitude: 200,
                longitude: 400
            },
            {
                name: "Warehouse 3",
                latitude: 300,
                longitude: 300
            }
        ]
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