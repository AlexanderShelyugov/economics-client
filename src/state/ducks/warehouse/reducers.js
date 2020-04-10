import { normalize, schema } from 'normalizr'
import { combineReducers } from 'redux'

import * as types from './types'

const WarehouseSchema = [new schema.Entity('warehouses')]

function entityReducer(
    state = {
        byId: {},
        allIds: []
    },
    action
) {
    switch (action.type) {
        case types.RECEIVE:
            const normalizedJson = normalize(action.warehouses, WarehouseSchema)
            return Object.assign({}, state, {
                byId: normalizedJson.entities.warehouses,
                allIds: normalizedJson.result
            })
        case types.RECEIVE_ERROR:
            return Object.assign({}, state, {
                byId: {},
                allIds: []
            })
        default: return state
    }
}

function metaReducer(
    state = {
        isFetching: false,
        invalidating: false,
        message: null
    },
    action
) {
    switch (action.type) {
        case types.INVALIDATE:
            return Object.assign({}, state, {
                invalidating: true
            })
        case types.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                invalidating: false,
                message: 'Loading...'
            })
        case types.RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                invalidating: false,
                message: null
            })
        case types.RECEIVE_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                invalidating: false,
                message: action.message
            })
        default: return state
    }
}

export default combineReducers({
    entities: entityReducer,
    meta: metaReducer
})