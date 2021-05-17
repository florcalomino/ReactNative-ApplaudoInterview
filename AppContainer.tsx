import React from 'react'
import Navigation from './src/navigation/'
import { connect } from 'react-redux'
import ErrorModal from './src/components/ErrorModal/ErrorModal'
import { cleanErrorMessage } from './src/actions'

const AppContainer = ({ appError, cleanErrorMessage }) => {
  return (
    <>
      <ErrorModal visible={!!appError} cleanErrorMessage={cleanErrorMessage} />
      <Navigation />
    </>
  )
}

const mapStateToProps = (state) => ({
  appError: state.seriesReducer.appError,
})

export default connect(mapStateToProps, { cleanErrorMessage })(AppContainer)
