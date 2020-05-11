import reducer from '../../../../state/ducks/warehouse/reducers'
import * as types from '../../../../state/ducks/warehouse/types'

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

const randomWarehouse = () => ({
    id: Math.ceil(Math.random() * (5000)).toString(),
    name: Math.random().toString(36).substring(7),
    latitude: Math.ceil(Math.random() * 360 - 180),
    longitude: Math.ceil(Math.random() * 180 - 90),
    capacity: Math.ceil(Math.random() * 200)
})

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
        const message = Math.random().toString(36).substring(7)
        expect(reducer(initialState, { type: types.RECEIVE_ERROR, message }).meta.message).toStrictEqual(message)
    })
})