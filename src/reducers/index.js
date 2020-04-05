import { combineReducers } from 'redux'
import warehouseReducer from './warehouses'

export default combineReducers({
    warehouses: warehouseReducer
})