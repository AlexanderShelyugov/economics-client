import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../../../../state/ducks/warehouse/actions'
import * as types from '../../../../state/ducks/warehouse/types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const randomWarehouse = () => ({
    id: Math.ceil(Math.random() * (5000)).toString(),
    name: Math.random().toString(36).substring(7),
    latitude: Math.ceil(Math.random() * 360 - 180),
    longitude: Math.ceil(Math.random() * 180 - 90),
    capacity: Math.ceil(Math.random() * 200)
})

describe('Warehouse actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('fetches correctly', () => {
        const warehouses = [randomWarehouse()]
        fetchMock.getOnce(200, {
            body: warehouses,
            headers: { 'content-type': 'application/json' }
        })
        const expectedActions = [
            { type: types.REQUEST },
            { type: types.RECEIVE, warehouses }
        ]

        const store = mockStore()
        return store.dispatch(actions.getWarehouses()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})