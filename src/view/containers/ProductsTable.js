import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ProductsTableComponent from '../components/ProductsTable'
import { productOperations as operations } from '../../state/ducks/product'

class ProductsTable extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(operations.getProducts())
    }

    render() {
        const { value, onRowClick } = this.props
        return (
            <ProductsTableComponent
                value={value}
                onRowClick={onRowClick}
            />
        )
    }
}

ProductsTable.propTypes = {
    onRowClick: PropTypes.func
}

const mapStateToProps = state => ({
    value: {
        products: state.product.entities.byId,
        productTypes: state.product.entities.typesById
    }
})

export default connect(mapStateToProps)(ProductsTable)