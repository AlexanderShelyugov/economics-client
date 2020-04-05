import { LOAD_WAREHOUSES, LOAD_WAREHOUSES_SUCCESS, LOAD_WAREHOUSES_ERROR } from '../actions/warehouses'

function warehousesLoadingReducer(
    state = {
        isFetching: false,
        didInvalidate: false,
        message: null,
        items: []
    },
    action
) {
    switch (action.type) {
        case LOAD_WAREHOUSES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                message: 'Loading...'
            })
        case LOAD_WAREHOUSES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                message: null,
                items: action.warehouses
            })
        case LOAD_WAREHOUSES_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                message: action.message,
                items: []
            })
        default: return state
    }
}

export default warehousesLoadingReducer