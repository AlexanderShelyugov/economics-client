import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { warehouseOperations as operations } from '../state/ducks/warehouse'
import WarehousesTable from '../components/Warehouses'

class Warehouses extends Component {
    constructor(props) {
        super(props)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    handleRefreshClick = e => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(operations.invalidateWarehouses())
        dispatch(operations.getWarehouses())
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(operations.getWarehouses())
    }

    render() {
        const { value, message } = this.props
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleRefreshClick} >Refresh</Button>
                {
                    message == null
                        ? null
                        : <h2>{message}</h2>
                }
                {
                    _.isEmpty(value)
                        ? <h2>No warehouses</h2>
                        : <div>
                            <WarehousesTable value={value} />
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.warehouse.meta.isFetching,
    value: state.warehouse.entities.byId,
    message: state.warehouse.meta.message
})

export default connect(mapStateToProps)(Warehouses)