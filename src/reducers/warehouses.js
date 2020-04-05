import { WarehousesActions } from '../actions/warehouses'
import { combineReducers } from 'redux'

const itemsReducer = (state = [], action) => {
    console.log(`Got action ${action}`)
    switch (action.type) {
        case WarehousesActions.LOAD_WAREHOUSES:
            return [
                ...state,
                {
                    name: "Warehouse 1 from items reducer",
                    latitude: 100,
                    longitude: 500
                },
                {
                    name: "Warehouse 2 from items reducer",
                    latitude: 200,
                    longitude: 400
                },
                {
                    name: "Warehouse 3 from items reducer",
                    latitude: 300,
                    longitude: 300
                }
            ]
        default:
            return state
    }
}

export default combineReducers({
    items: itemsReducer
})