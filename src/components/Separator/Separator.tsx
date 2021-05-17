import React from 'react'
import { View } from 'react-native'
import styles from './Separator.styles'

const Separator = (props) => {
  const { separator, whiteColor } = styles
  return <View style={[separator, props.white && whiteColor]} />
}

export default Separator
