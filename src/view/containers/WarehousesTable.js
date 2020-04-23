import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import WarehousesTableComponent from '../components/WarehousesTable'

const WarehousesTable = props => (
    <WarehousesTableComponent
        value={props.value}
        onWarehouseClick={props.onWarehouseClick}
    />
)

WarehousesTable.propTypes = {
    onWarehouseClick: PropTypes.func
}

const mapStateToProps = state => ({
    value: state.warehouse.entities.byId
})

export default connect(mapStateToProps)(WarehousesTable)