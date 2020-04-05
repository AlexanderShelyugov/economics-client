import React from 'react'
import PropTypes from 'prop-types'
import {
    Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'

const Warehouses = ({ value, onRefreshClick }) => {
    return (
        <div>
            <h1 className="content">Warehouses are here!</h1>
            <Button variant="contained" color="primary" onClick={onRefreshClick} >Refresh</Button>
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
    ).isRequired,
    onRefreshClick: PropTypes.func
}

export default Warehouses