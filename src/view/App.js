import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import 'typeface-roboto'

import Warehouses from './containers/Warehouses'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Warehouses />
    </ThemeProvider>
  )
}

export default App
