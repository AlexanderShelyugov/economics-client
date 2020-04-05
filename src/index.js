import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import 'typeface-roboto'

import App from './App'
import rootReducer from './reducers'

const initialState = {
  warehouses: {
    items: [
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
  }
}

const store = createStore(rootReducer, initialState)

render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
