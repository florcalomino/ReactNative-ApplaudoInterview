import React from 'react'
import { Text } from 'react-native'
import styles from './RegularText.styles'

const RegularText = (props) => {
  const { regular } = styles
  return (
    <Text {...props} style={[props.style, regular]}>
      {props.text}
    </Text>
  )
}

export default RegularText
