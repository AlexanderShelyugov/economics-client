import produce from 'immer'
import { normalize, schema } from 'normalizr'
import { combineReducers } from 'redux'

import * as types from './types'

const ProductSchema = [new schema.Entity('products', {
    type: new schema.Entity('productTypes')
})]

const entityReducer = (
    state = {
        byId: {},
        typesById: {},
        allIds: []
    },
    action
) => produce(state, draft => {
    switch (action.type) {
        case types.RECEIVE:
            const normalizedJson = normalize(action.products, ProductSchema)
            Object.assign(draft, {
                byId: normalizedJson.entities.products,
                typesById: normalizedJson.entities.productTypes,
                allIds: normalizedJson.result
            })
            break
        case types.RECEIVE_ERROR:
            Object.assign(draft, {
                byId: {},
                typesById: {},
                allIds: []
            })
            break
        default:
            break
    }
})

const metaReducer = (
    state = {
        isFetching: false,
        invalidating: false,
        message: null
    },
    action
) => produce(state, draft => {
    switch (action.type) {
        case types.INVALIDATE:
            Object.assign(draft, {
                invalidating: true
            })
            break
        case types.REQUEST:
            Object.assign(draft, {
                isFetching: true,
                invalidating: false,
                message: 'Loading...'
            })
            break
        case types.RECEIVE:
            Object.assign(draft, {
                isFetching: false,
                invalidating: false,
                message: null
            })
            break
        case types.RECEIVE_ERROR:
            Object.assign(draft, {
                isFetching: false,
                invalidating: false,
                message: action.message
            })
            break
        default:
            break
    }
})

export default combineReducers({
    entities: entityReducer,
    meta: metaReducer
})