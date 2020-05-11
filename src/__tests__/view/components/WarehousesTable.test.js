import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import WarehousesTableComponent from '../../../../src/view/components/WarehousesTable'

const randomWarehouse = () => ({
    id: Math.ceil(Math.random() * (5000)).toString(),
    name: Math.random().toString(36).substring(7),
    latitude: Math.ceil(Math.random() * 360 - 180),
    longitude: Math.ceil(Math.random() * 180 - 90),
    capacity: Math.ceil(Math.random() * 200)
})

const randomWarehouses = () => {
    const warehouses = {}
    for (let i = 0; i < 5; i++) {
        let warehouse = randomWarehouse()
        warehouses[warehouse.id] = warehouse
    }
    return warehouses
}

describe('Warehouses table', () => {
    let container = null
    beforeEach(() => {
        container = document.createElement("div")
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })

    it('renders without warehouses', () => {
        act(() => {
            render(<WarehousesTableComponent />, container)
        })
        expect(container.querySelector('table')).not.toBeNull()
        expect(container.querySelectorAll('tbody tr')).toHaveLength(0)
    })

    it('renders with warehouses', () => {
        const warehouses = randomWarehouses()
        act(() => {
            render(<WarehousesTableComponent value={warehouses} />, container)
        })
        expect(container.querySelector('table')).not.toBeNull()
        expect(container.querySelectorAll('tbody tr')).toHaveLength(Object.keys(warehouses).length)
    })

    it('calls onClick function', () => {
        const warehouses = randomWarehouses()
        const onClick = jest.fn()
        act(() => {
            render(<WarehousesTableComponent
                value={warehouses}
                onWarehouseClick={onClick}
            />,
                container)
        })
        const tableRows = container.querySelectorAll('tbody td')
        expect(tableRows.length).toBeGreaterThan(0)
        act(() => {
            tableRows.forEach((row) => row.dispatchEvent(new MouseEvent('click', { bubbles: true })))
        })
        expect(onClick).toHaveBeenCalledTimes(tableRows.length)
    })
})