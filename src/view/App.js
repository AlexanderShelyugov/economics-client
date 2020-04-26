import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import 'typeface-roboto'

import EconomicsMainPage from './pages/EconomicsMainPage'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EconomicsMainPage />
    </ThemeProvider>
  )
}

export default App
