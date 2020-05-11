import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../../../../state/ducks/warehouse/actions'
import * as types from '../../../../state/ducks/warehouse/types'

import { randomWarehouse } from '../../../utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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