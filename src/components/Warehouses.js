import React from 'react'
import PropTypes from 'prop-types'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'

const Warehouses = ({ value }) => {
    return (
        <div>
            <h1 className="content">Warehouses are here!</h1>
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
                            value.map((w) => (
                                <TableRow key={w.name}>
                                    <TableCell>{w.name}</TableCell>
                                    <TableCell>{w.latitude}</TableCell>
                                    <TableCell>{w.longitude}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

Warehouses.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Warehouses