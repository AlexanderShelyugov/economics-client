import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { fetchWarehousesIfNeeded } from '../actions/warehouses'
import WarehousesTable from '../components/Warehouses'

class Warehouses extends Component {
    constructor(props) {
        super(props)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    handleRefreshClick = e => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(fetchWarehousesIfNeeded())
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchWarehousesIfNeeded())
    }

    render() {
        const { value, message } = this.props
        const isEmpty = value.length === 0
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleRefreshClick} >Refresh</Button>
                {
                    isEmpty
                        ? (message != null ? <h2>{message}</h2> : <h2>No warehouses</h2>)
                        : <div>
                            <WarehousesTable value={value} />
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.warehouses.isFetching,
    value: state.warehouses.items,
    message: state.warehouses.message
})

export default connect(mapStateToProps)(Warehouses)