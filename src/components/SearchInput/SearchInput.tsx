import React from 'react'
import { View, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './SearchInput.styles'

const SearchInput = ({ onChangeText, value }) => {
  const { searchWrapper, text, icon } = styles
  return (
    <View style={searchWrapper}>
      <TextInput placeholder="Search..." style={text} onChangeText={onChangeText} value={value} />
      <FontAwesomeIcon size={16} style={icon} icon={faSearch} />
    </View>
  )
}

export default SearchInput
