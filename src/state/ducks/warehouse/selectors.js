import { getStore } from '../../store'

export function getById(id) {
    if (id == null || getStore() == null) {
        return null
    }
    const state = getStore().getState()
    return state.warehouse.entities.byId[id]
}