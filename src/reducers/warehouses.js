import { normalize, schema } from 'normalizr'

import { INVALIDATE_WAREHOUSES, LOAD_WAREHOUSES, LOAD_WAREHOUSES_SUCCESS, LOAD_WAREHOUSES_ERROR } from '../actions/warehouses'

const WarehouseSchema = [new schema.Entity('warehouses')]

export function warehouseEntityReducer(
    state = {
        byId: {},
        allIds: []
    },
    action
) {
    switch (action.type) {
        case LOAD_WAREHOUSES_SUCCESS:
            const normalizedJson = normalize(action.warehouses, WarehouseSchema)
            return Object.assign({}, state, {
                byId: normalizedJson.entities.warehouses,
                allIds: normalizedJson.result
            })
        case LOAD_WAREHOUSES_ERROR:
            return Object.assign({}, state, {
                byId: {},
                allIds: []
            })
        default: return state
    }
}

export function warehouseClientReducer(
    state = {
        isFetching: false,
        invalidating: false,
        message: null
    },
    action) {
    switch (action.type) {
        case INVALIDATE_WAREHOUSES:
            return Object.assign({}, state, {
                invalidating: true
            })
        case LOAD_WAREHOUSES:
            return Object.assign({}, state, {
                isFetching: true,
                invalidating: false,
                message: 'Loading...'
            })
        case LOAD_WAREHOUSES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                invalidating: false,
                message: null
            })
        case LOAD_WAREHOUSES_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                invalidating: false,
                message: action.message
            })
        default: return state
    }
}
