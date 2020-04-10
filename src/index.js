import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './view/App'
import configureStore from './state/store'

const store = configureStore()

render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
