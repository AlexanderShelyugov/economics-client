import PropTypes from 'prop-types'

const { shape, string } = PropTypes

export default shape({
    id: string.isRequired,
    name: string.isRequired
})