import _ from 'lodash'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { warehouseShape } from '../propTypes'

class WarehousesTableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick(id) {
        this.setState(() => ({ selectedId: id }))
        if (this.props.onWarehouseClick) {
            this.props.onWarehouseClick(id)
        }
    }

    render() {
        const { value } = this.props
        const { selectedId } = this.state

        return (
            <TableContainer>
                <Table stickyHeader aria-label="Warehouses">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Latitude</TableCell>
                            <TableCell>Longitude</TableCell>
                            <TableCell>Capacity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !value
                                ? null
                                : _.map(value, (w) => {
                                    const id = w.id
                                    const onClick = (e) => {
                                        e.preventDefault()
                                        this.handleClick(id)
                                    }
                                    return (
                                        <TableRow key={id}
                                            hover
                                            selected={selectedId === id}
                                        >
                                            <TableCell onClick={onClick}>{w.name}</TableCell>
                                            <TableCell onClick={onClick}>{w.latitude}</TableCell>
                                            <TableCell onClick={onClick}>{w.longitude}</TableCell>
                                            <TableCell onClick={onClick}>{w.capacity}</TableCell>
                                        </TableRow>
                                    )
                                })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

WarehousesTableComponent.propTypes = {
    value: PropTypes.objectOf(
        warehouseShape.isRequired
    ),
    onWarehouseClick: PropTypes.func
}

export default WarehousesTableComponent