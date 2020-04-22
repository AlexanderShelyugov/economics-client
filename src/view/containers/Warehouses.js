import { Button, Typography } from '@material-ui/core'
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import WarehousesTable from '../components/WarehousesTable'
import WarehouseSummary from '../components/WarehouseSummary'
import { warehouseShape } from '../propTypes'
import { warehouseOperations as operations, warehouseSelectors as selectors } from '../../state/ducks/warehouse'


class Warehouses extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
        this.handleWarehouseClick = this.handleWarehouseClick.bind(this)
    }

    handleRefreshClick = e => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(operations.invalidateWarehouses())
        dispatch(operations.getWarehouses())
    }

    handleWarehouseClick = id => {
        this.setState({
            selectedWarehouse: selectors.getById(id)
        })
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(operations.getWarehouses())
    }

    render() {
        const { value, message } = this.props
        const { selectedWarehouse } = this.state
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleRefreshClick} >Refresh</Button>
                {
                    message == null
                        ? null
                        : <Typography variant="h4">{message}</Typography>
                }
                {
                    _.isEmpty(value)
                        ? <h2>No warehouses</h2>
                        : <div>
                            <WarehousesTable
                                value={value}
                                onClick={this.handleWarehouseClick}
                            />
                            <WarehouseSummary value={selectedWarehouse} />
                        </div>
                }
            </div>
        )
    }
}

Warehouses.propTypes = {
    value: PropTypes.objectOf(
        warehouseShape.isRequired
    ).isRequired
}

const mapStateToProps = state => ({
    isFetching: state.warehouse.meta.isFetching,
    value: state.warehouse.entities.byId,
    message: state.warehouse.meta.message
})

export default connect(mapStateToProps)(Warehouses)