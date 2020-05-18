import _ from 'lodash'
import {
    TableCell, TableRow
} from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { warehouseShape } from '../propTypes'
import PageableTable from './PageableTable'

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

        const count = () => _.keys(value).length
        const headerMapper = () => (
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Latitude</TableCell>
                <TableCell>Longitude</TableCell>
                <TableCell>Capacity</TableCell>
            </TableRow>
        )
        const valuesMapper = (page, rowsPerPage) => {
            if (value == null) {
                return null
            }
            return _.values(value)
                .sort((warehouseA, warehouseB) => warehouseA.name.localeCompare(warehouseB.name))
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map((w) => {
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

        return (
            <PageableTable
                colspan={4}
                count={count}
                headerMapper={headerMapper}
                valuesMapper={valuesMapper}
            />
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