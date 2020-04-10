import _ from 'lodash'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import { warehouseShape } from '../propTypes'

const WarehousesTable = ({ value }) => {
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            _.map(value, (w) =>
                                <TableRow key={w.id}>
                                    <TableCell>{w.name}</TableCell>
                                    <TableCell>{w.latitude}</TableCell>
                                    <TableCell>{w.longitude}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

WarehousesTable.propTypes = {
    value: PropTypes.objectOf(
        warehouseShape.isRequired
    ).isRequired
}

export default WarehousesTable