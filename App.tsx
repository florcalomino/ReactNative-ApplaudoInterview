import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import EStyleSheet from 'react-native-extended-stylesheet'
import Layout from './src/constants/Layout'

import useCachedResources from './src/hooks/useCachedResources'
import rootReducer from './src/reducers'
import AppContainer from './AppContainer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  const isLoadingComplete = useCachedResources()

  const buildStylesProperties = () => {
    // Build Global Style Properties
    const rem = Layout.isSmallDevice ? 15 : 18

    EStyleSheet.build({
      $red: '#d80910',
      $lightGray: '#a6a4a4',
      $gray: '#474747',
      $black: '#000000',
      $white: '#ffffff',
      $rem: rem,
    })
  }

  useEffect(() => {
    buildStylesProperties()
  }, [])

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <AppContainer />
        <StatusBar />
      </Provider>
    )
  }
}
