import React from 'react'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './BackArrow.styles'

const BackArrow = () => {
  const { back, icon } = styles
  return (
    <View style={back}>
      <FontAwesomeIcon icon={faAngleLeft} style={icon} size={25} />
    </View>
  )
}

export default BackArrow
