import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import 'typeface-roboto'

import App from './App'
import { configureStore } from './store'

const store = configureStore()

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
