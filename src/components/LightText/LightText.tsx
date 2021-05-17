import React from 'react'
import { Text } from 'react-native'
import styles from './LightText.styles'

const LightText = (props) => {
  const { light } = styles
  return (
    <Text {...props} style={[props.style, light]}>
      {props.text}
    </Text>
  )
}

export default LightText
