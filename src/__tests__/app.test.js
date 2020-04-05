import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'

import Warehouses from '../components/Warehouses'

test('Warehouses component is correct', () => {
    const container = document.createElement('div')
    ReactDOM.render(<Warehouses/>, container)
    expect(container.querySelector('.content')).toBeTruthy()
    expect(container.querySelector('.content')).toHaveTextContent('Warehouses are here!')
})