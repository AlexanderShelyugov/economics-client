import _ from 'lodash'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { productShape, productTypeShape } from '../propTypes'

class ProductsTableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick(id) {
        this.setState(() => ({ selectedId: id }))
        if (this.props.onRowClick) {
            this.props.onRowClick(id)
        }
    }

    render() {
        const { products, productTypes } = this.props.value
        const { selectedId } = this.state

        return (
            <TableContainer>
                <Table stickyHeader aria-label="Products">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            _.map(products, (p) => {
                                const id = p.id
                                const onClick = (e) => {
                                    e.preventDefault()
                                    this.handleClick(id)
                                }
                                return (
                                    <TableRow key={id}
                                        hover
                                        selected={selectedId === id}
                                    >
                                        <TableCell onClick={onClick}>{p.name}</TableCell>
                                        <TableCell onClick={onClick}>{_.get(productTypes[p.type], 'name')}</TableCell>
                                        <TableCell onClick={onClick}>{p.weight}</TableCell>
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

const { func, objectOf, shape } = PropTypes

ProductsTableComponent.propTypes = {
    value: shape({
        products: objectOf(
            productShape.isRequired
        ).isRequired,
        productTypes: objectOf(
            productTypeShape.isRequired
        ).isRequired
    }),
    onRowClick: func
}

export default ProductsTableComponent