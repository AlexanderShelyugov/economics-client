import { connect } from 'react-redux'

import { loadWarehouses } from '../actions/warehouses'
import Warehouses from '../components/Warehouses'

const mapStateToProps = state => ({
    value: state.warehouses.items
})

const mapDispatchToProps = dispatch => ({
    onRefreshClick: () => dispatch(loadWarehouses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Warehouses)