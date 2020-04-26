import _ from 'lodash'
import { Button, Container, Drawer, IconButton, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import WarehouseSummary from '../components/WarehouseSummary'
import WarehousesTable from './WarehousesTable'
import { warehouseOperations as operations, warehouseSelectors as selectors } from '../../state/ducks/warehouse'
import { productOperations } from '../../state/ducks/product'

class WarehousesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
        this.handleWarehouseClick = this.handleWarehouseClick.bind(this)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(operations.getWarehouses())
        dispatch(productOperations.getProducts())
    }

    handleRefreshClick = e => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(operations.invalidateWarehouses())
        dispatch(operations.getWarehouses())
    }

    setOpen(isOpen) {
        this.setState(() => ({ isOpen }))
    }

    getOpen() {
        return this.state.isOpen
    }

    handleWarehouseClick = id => {
        if (_.get(this.state, "selectedWarehouse.id") === id) {
            this.setOpen(!this.getOpen())
            return
        }
        this.setState({
            selectedWarehouse: selectors.getById(id)
        })
        this.setOpen(true)
    }

    handleDrawerClose = e => {
        e.preventDefault()
        this.setOpen(false)
    }

    render() {
        const { value, message } = this.props
        const { selectedWarehouse, isOpen } = this.state
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
                        :
                        <div>
                            <main>
                                <WarehousesTable
                                    onWarehouseClick={this.handleWarehouseClick}
                                />
                            </main>
                            <aside>
                                <Drawer anchor="right"
                                    variant="persistent"
                                    open={isOpen}>
                                    <div>
                                        <IconButton onClick={this.handleDrawerClose}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <Container>
                                        <WarehouseSummary value={selectedWarehouse} />
                                    </Container>
                                </Drawer>
                            </aside>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    value: state.warehouse.entities.byId,
    message: state.warehouse.meta.message
})

export default connect(mapStateToProps)(WarehousesPage)