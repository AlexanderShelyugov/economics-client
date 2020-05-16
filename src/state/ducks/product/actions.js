import _ from 'lodash'

import { serverUrl } from '../../config'
import * as types from './types'

export const invalidateProducts = () => ({
    type: types.INVALIDATE
})

const requestProducts = () => ({
    type: types.REQUEST
})

const receiveProducts = (json) => ({
    type: types.RECEIVE,
    products: json
})

const errorOnReceiveProducts = (error) => ({
    type: types.RECEIVE_ERROR,
    message: error.message
})

function shouldFetchProducts(state) {
    if (_.isEmpty(_.get(state, 'product.entities.byId'))) {
        return true
    } else if (_.get(state, 'product.meta.isFetching')) {
        return false
    } else {
        return _.get(state, 'product.meta.invalidating')
    }
}

function fetchProducts() {
    return dispatch => {
        dispatch(requestProducts())
        return fetch(serverUrl + '/products')
            .then(response => response.json())
            .then(
                json => dispatch(receiveProducts(json)),
                error => {
                    console.log('Failed to load products', error)
                    dispatch(errorOnReceiveProducts(error))
                })
    }
}

export function getProducts() {
    return (dispatch, getState) => {
        if (shouldFetchProducts(getState())) {
            return dispatch(fetchProducts())
        } else {
            return Promise.resolve()
        }
    }
}