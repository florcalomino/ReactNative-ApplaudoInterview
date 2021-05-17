import React from 'react'
import { Text } from 'react-native'
import styles from './Title.styles'

const Title = (props) => {
  const { title } = styles
  return (
    <Text {...props} style={[props.style, title]}>
      {props.text}
    </Text>
  )
}

export default Title
