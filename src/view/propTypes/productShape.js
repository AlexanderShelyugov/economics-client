import PropTypes from 'prop-types'

const { number, shape, string } = PropTypes

export default shape({
    id: string.isRequired,
    name: string.isRequired,
    type: string.isRequired,
    weight: number.isRequired
})