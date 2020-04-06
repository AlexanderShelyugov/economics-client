import { combineReducers } from 'redux'
import { warehouseClientReducer, warehouseEntityReducer } from './warehouses'

const entitiesReducer = combineReducers({
    warehouses: warehouseEntityReducer
})

const clientAreaReducer = combineReducers({
    warehouses: warehouseClientReducer
})

export default combineReducers({
    entities: entitiesReducer,
    clientArea: clientAreaReducer
})