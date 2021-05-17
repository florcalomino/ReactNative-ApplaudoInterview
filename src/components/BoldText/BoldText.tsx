import React from 'react'
import { Text } from 'react-native'
import styles from './BoldText.styles'

const BoldText = (props) => {
  const { bold } = styles
  return (
    <Text {...props} style={[props.style, bold]}>
      {props.text}
    </Text>
  )
}

export default BoldText
