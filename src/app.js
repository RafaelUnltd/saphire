import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/native'

import Theme from './config/theme'
import Navigator from './navigator'
import { Persistor, Store } from './store'

const App = () => (
  <ThemeProvider theme={Theme}>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  </ThemeProvider>
)

export default App
