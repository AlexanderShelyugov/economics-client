import React from 'react'
import PropTypes from 'prop-types'

import { warehouseShape } from '../propTypes'

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

WarehouseSummary.propTypes = {
    value: PropTypes.objectOf(
        warehouseShape.isRequired
    )
}

export default WarehouseSummary