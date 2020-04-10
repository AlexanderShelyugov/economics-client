import _ from 'lodash'

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
    if (_.isEmpty(state.warehouse.entities.byId)) {
        return true
    } else if (state.warehouse.meta.isFetching) {
        return false
    } else {
        return state.warehouse.meta.invalidating
    }
}

function fetchWarehouses() {
    return dispatch => {
        dispatch(requestWarehouses())
        return fetch('http://localhost:8080/warehouses/')
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