import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { invalidateWarehouses, getWarehouses } from '../actions/warehouses'
import WarehousesTable from '../components/Warehouses'

class Warehouses extends Component {
    constructor(props) {
        super(props)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    handleRefreshClick = e => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(invalidateWarehouses())
        dispatch(getWarehouses())
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getWarehouses())
    }

    render() {
        const { value, message } = this.props
        return (
            <div>
                {
                    message == null
                        ? <Button variant="contained" color="primary" onClick={this.handleRefreshClick} >Refresh</Button>
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
    isFetching: state.clientArea.warehouses.isFetching,
    value: state.entities.warehouses.byId,
    message: state.clientArea.warehouses.message
})

export default connect(mapStateToProps)(Warehouses)