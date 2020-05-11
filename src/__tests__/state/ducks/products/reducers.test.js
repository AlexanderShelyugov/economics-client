import reducer from '../../../../state/ducks/product/reducers'
import * as types from '../../../../state/ducks/product/types'

import { randomString, randomProduct, randomProductType } from '../../../utils'

const initialState = {
    entities: {
        allIds: [],
        byId: {},
        typesById: {}
    },
    meta: {
        invalidating: false,
        isFetching: false,
        message: null
    }
}

describe('Product reducers', () => {
    it('works with initial state', () => {
        expect(reducer({}, {})).toEqual(initialState)
    })

    it('invalidates correctly', () => {
        expect(reducer(initialState, { type: types.INVALIDATE }).meta.invalidating).toStrictEqual(true)
    })

    it('requests products', () => {
        expect(reducer(initialState, { type: types.REQUEST }).meta.isFetching).toStrictEqual(true)
    })

    it('receives products', () => {
        const type = randomProductType()
        const product = randomProduct(type)
        const newState = {
            entities: {
                allIds: [product.id],
                byId: {
                    [product.id]: product
                },
                typesById: {
                    [type.id]: type
                }
            },
            meta: {
                invalidating: false,
                isFetching: false,
                message: null
            }
        }

        expect(reducer(
            initialState,
            {
                type: types.RECEIVE,
                products: [Object.assign({}, product, { type })]
            }
        )).toStrictEqual(newState)
    })

    it('handles receive error', () => {
        const message = randomString()
        expect(reducer(initialState, { type: types.RECEIVE_ERROR, message }).meta.message).toStrictEqual(message)
    })
})