import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { defaultTheme, ThemeProvider, Preflight, x } from '@xstyled/emotion'

import { Button } from '@components/atoms'

const theme = {
  ...defaultTheme,
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <x.div
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="100vw"
              h="100vh"
            >
              <Button onClick={() => console.log('click')}>Button</Button>
            </x.div>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
