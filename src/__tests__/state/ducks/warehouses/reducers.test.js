import reducer from '../../../../state/ducks/warehouse/reducers'
import * as types from '../../../../state/ducks/warehouse/types'

import { randomString, randomWarehouse } from '../../../utils'

const initialState = {
    entities: {
        allIds: [],
        byId: {}
    },
    meta: {
        invalidating: false,
        isFetching: false,
        message: null
    }
}

describe('Warehouse reducers', () => {
    it('works with initial state', () => {
        expect(reducer({}, {})).toEqual(initialState)
    })

    it('invalidates correctly', () => {
        expect(reducer(initialState, { type: types.INVALIDATE }).meta.invalidating).toStrictEqual(true)
    })

    it('requests warehouses', () => {
        expect(reducer(initialState, { type: types.REQUEST }).meta.isFetching).toStrictEqual(true)
    })

    it('receives warehouses', () => {
        const newState = {
            entities: {
                allIds: [],
                byId: {}
            },
            meta: {
                invalidating: false,
                isFetching: false,
                message: null
            }
        }
        const warehouse = randomWarehouse()
        newState.entities.byId[warehouse.id] = warehouse
        newState.entities.allIds.push(warehouse.id)

        expect(reducer(initialState, { type: types.RECEIVE, warehouses: [warehouse] })).toStrictEqual(newState)
    })

    it('handles receive error', () => {
        const message = randomString()
        expect(reducer(initialState, { type: types.RECEIVE_ERROR, message }).meta.message).toStrictEqual(message)
    })
})