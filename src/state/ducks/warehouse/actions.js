import _ from 'lodash'

import { warehousesUrl } from '../../config'
import * as types from './types'

export const invalidateWarehouses = () => ({
    type: types.INVALIDATE
})

const requestWarehouses = () => ({
    type: types.REQUEST
})

const receiveWarehouses = (json) => ({
    type: types.RECEIVE,
    warehouses: json
})

const errorOnReceiveWarehouses = (error) => ({
    type: types.RECEIVE_ERROR,
    message: error.message
})

function shouldFetchWarehouses(state) {
    if (_.isEmpty(_.get(state, 'warehouse.entities.byId'))) {
        return true
    } else if (_.get(state, 'warehouse.meta.isFetching')) {
        return false
    } else {
        return _.get(state, 'warehouse.meta.invalidating')
    }
}

function fetchWarehouses() {
    return dispatch => {
        dispatch(requestWarehouses())
        return fetch(warehousesUrl + '/warehouses')
            .then(response => response.json())
            .then(
                json => dispatch(receiveWarehouses(json)),
                error => {
                    console.log('Failed to load warehouses', error)
                    dispatch(errorOnReceiveWarehouses(error))
                })
    }
}

export function getWarehouses() {
    return (dispatch, getState) => {
        if (shouldFetchWarehouses(getState())) {
            return dispatch(fetchWarehouses())
        } else {
            return Promise.resolve()
        }
    }
}