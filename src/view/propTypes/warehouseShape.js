import PropTypes from 'prop-types'

const { number, shape, string } = PropTypes

export default shape({
    id: string.isRequired,
    name: string.isRequired,
    latitude: number.isRequired,
    longitude: number.isRequired,
    capacity: number.isRequired
})