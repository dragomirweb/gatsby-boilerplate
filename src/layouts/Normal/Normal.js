import * as React from 'react'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'

import '@assets/css/reset.css'

const theme = {
  ...defaultTheme,
}

const StandardLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Preflight />
    {children}
  </ThemeProvider>
)

export default StandardLayout
