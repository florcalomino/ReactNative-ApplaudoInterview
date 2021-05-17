import React from 'react'
import { Image } from 'react-native'
import styles from './Logo.styles'

const Logo = () => {
  const { logo } = styles
  return (
    <Image style={logo} resizeMode="contain" source={require('../../assets/images/logo.png')} />
  )
}

export default Logo
