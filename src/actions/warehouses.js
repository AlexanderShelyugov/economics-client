import _ from 'lodash'

export const INVALIDATE_WAREHOUSES = 'INVALIDATE_WAREHOUSES'
export const LOAD_WAREHOUSES = 'LOAD_WAREHOUSES'
export const LOAD_WAREHOUSES_SUCCESS = 'LOAD_WAREHOUSES_SUCCESS'
export const LOAD_WAREHOUSES_ERROR = 'LOAD_WAREHOUSES_ERROR'

export const invalidateWarehouses = () => {
    return { type: INVALIDATE_WAREHOUSES }
}

const loadWarehouses = () => ({
    type: LOAD_WAREHOUSES
})

export const receiveWarehouses = (json) => {
    return {
        type: LOAD_WAREHOUSES_SUCCESS,
        warehouses: json
    }
}

export const errorOnReceiveWarehouses = () => {
    return {
        type: LOAD_WAREHOUSES_ERROR,
        message: 'Error while loading warehouses'
    }
}

function shouldFetchWarehouses(state) {
    if (_.isEmpty(state.entities.warehouses.byId)) {
        return true
    } else if (state.clientArea.warehouses.isFetching) {
        return false
    }
    return state.clientArea.warehouses.invalidating
}

function fetchWarehouses() {
    return dispatch => {
        dispatch(loadWarehouses())
        return fetch('http://localhost:8080/warehouses/')
            .then(response => response.json())
            .then(
                json => dispatch(receiveWarehouses(json)),
                error => {
                    console.log('Failed to load warehouses', error)
                    dispatch(errorOnReceiveWarehouses())
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
