import { WarehousesActions } from '../actions/warehouses'

export default (state = [], action) => {
    switch (action.type) {
        case WarehousesActions.LOAD_WAREHOUSES:
            return [
                ...state,
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
        default:
            return state
    }
}