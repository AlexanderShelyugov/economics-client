import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../../../../state/ducks/product/actions'
import * as types from '../../../../state/ducks/product/types'

import { randomProduct, randomProductType } from '../../../utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Product actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('fetches correctly', () => {
        const type = randomProductType()
        const products = [Object.assign(randomProduct(), { type })]
        fetchMock.getOnce(200, {
            body: products,
            headers: { 'content-type': 'application/json' }
        })
        const expectedActions = [
            { type: types.REQUEST },
            { type: types.RECEIVE, products }
        ]

        const store = mockStore()
        return store.dispatch(actions.getProducts()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})