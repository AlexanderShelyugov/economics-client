import React from 'react'

const WarehouseSummary = ({ value }) => {
    if (value == null) {
        return null
    }
    return (
        <div>
            <h2>{value.name}</h2>
            <h3>{value.latitude} {value.longitude}</h3>
            <h3>Warehouse's capacity is {value.capacity}</h3>
        </div>
    )
}

export default WarehouseSummary