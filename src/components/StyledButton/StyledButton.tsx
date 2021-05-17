import React from 'react'
import { TouchableOpacity } from 'react-native'

import RegularText from '../../components/RegularText/RegularText'
import styles from './StyledButton.styles'

const StyledButton = ({ text, onPress }) => {
  const { btn, textStyle } = styles

  return (
    <TouchableOpacity style={btn} onPress={onPress}>
      <RegularText style={textStyle} text={text} />
    </TouchableOpacity>
  )
}

export default StyledButton
