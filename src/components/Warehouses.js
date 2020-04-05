import React from 'react'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'

const rows = [
    {
        name: "Warehouse 1",
        latitude: 100,
        longitude: 500
    },
    {
        name: "Warehouse 2",
        latitude: 200,
        longitude: 400
    },
    {
        name: "Warehouse 3",
        latitude: 300,
        longitude: 300
    }
]

function Warehouses() {
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
                            rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.latitude}</TableCell>
                                    <TableCell>{row.longitude}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Warehouses