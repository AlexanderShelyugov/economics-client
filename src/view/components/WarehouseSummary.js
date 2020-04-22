import React from 'react'

const WarehouseSummary = ({ value }) => {
    if (value == null) {
        return <h2>Nothing</h2>
    }
    return (
        <div>
            <h3>{value.name}</h3>
            <h2>{value.latitude} {value.longitude}</h2>
            <h2>Warehouse's capacity is {value.capacity}</h2>
        </div>
    )
}

export default WarehouseSummary