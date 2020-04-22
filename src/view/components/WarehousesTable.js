import _ from 'lodash'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { warehouseShape } from '../propTypes'

class WarehousesTable extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (id) => {
        this.setState((state) => {
            state.selectedId = id
        })
        if (this.props.onClick) {
            this.props.onClick(id)
        }
    }

    render() {
        const { value } = this.props
        const { selectedId } = this.state

        return (
            <div>
                <Typography variant="h4"><p className="content">Warehouses are here!</p></Typography>
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
                                _.map(value, (w) => {
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
            </div>
        )
    }
}

WarehousesTable.propTypes = {
    value: PropTypes.objectOf(
        warehouseShape.isRequired
    ).isRequired,
    onClick: PropTypes.func
}

export default WarehousesTable