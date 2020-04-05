import { connect } from 'react-redux'
import Warehouses from '../components/Warehouses'

const mapStateToProps = state => ({
    value: state.warehouses
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Warehouses)