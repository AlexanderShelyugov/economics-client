import { getStore } from '../../store'

export function getById(id) {
    const state = getStore() 
    if (id == null || state == null) {
        return null
    }
    return state.warehouse.entities.byId[id]
}