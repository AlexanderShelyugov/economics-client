export const LOAD_WAREHOUSES = 'LOAD_WAREHOUSES'
export const LOAD_WAREHOUSES_SUCCESS = 'LOAD_WAREHOUSES_SUCCESS'
export const LOAD_WAREHOUSES_ERROR = 'LOAD_WAREHOUSES_ERROR'

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
        message: 'Failed to load warehouses'
    }
}

function shouldFetchWarehouses(state) {
    if (!state.items) {
        return true
    } else if (state.isFething) {
        return false
    } else {
        return state.didInvalidate
    }
}

function fetchWarehouses() {
    return dispatch => {
        dispatch(loadWarehouses())
        return fetch('http://localhost:8080/warehouses/')
            .then(response => response.json())
            .then(
                json => dispatch(receiveWarehouses(json))
            ).catch(error => {
                console.log('Failed to load warehouses', error)
                dispatch(errorOnReceiveWarehouses())
            })
    }
}

export function fetchWarehousesIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchWarehouses(getState())) {
            return dispatch(fetchWarehouses())
        } else {
            return Promise.resolve()
        }
    }
}
