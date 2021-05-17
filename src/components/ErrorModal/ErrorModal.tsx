import React, { useCallback } from 'react'
import { View, Modal, TouchableOpacity, Linking, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import StyledButton from '../StyledButton/StyledButton'
import LightText from '../../components/LightText/LightText'
import BoldText from '../../components/BoldText/BoldText'
import Colors from '../../constants/Colors'
import styles from './ErrorModal.styles'

const ErrorModal = ({ visible, cleanErrorMessage }) => {
  const { modalWrapper, modalOverlay, title, subtitle, support } = styles

  const OpenLink = ({ url }) => {
    const handleSupportLink = useCallback(async () => {
      const supported = await Linking.canOpenURL(url)

      if (supported) {
        await Linking.openURL(url)
      } else {
        Alert.alert(`Can't open this URL: ${url}`)
      }
    }, [url])

    return (
      <TouchableOpacity onPress={handleSupportLink}>
        <LightText style={support} text="support@ojocritico.com" />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={modalOverlay}>
          <View style={modalWrapper}>
            <FontAwesomeIcon color={Colors.red} size={28} icon={faExclamationCircle} />
            <BoldText style={title} text="Ups! Something went wrong" />
            <LightText
              style={subtitle}
              text="Please try again. If the problem persists contact support area."
            />
            <OpenLink url="mailto:support@gmail.com" />
            <StyledButton text="Close" onPress={cleanErrorMessage} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ErrorModal
