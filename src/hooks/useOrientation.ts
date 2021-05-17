import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

const PORTRAIT = 'portrait'
const LANDSCAPE = 'landscape'

export const getOrientation = () => {
  if (Dimensions.get('window').width < Dimensions.get('window').height) {
    return PORTRAIT
  }

  return LANDSCAPE
}

const useOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation)

  useEffect(() => {
    const handler = () => {
      setOrientation(getOrientation())
    }
    Dimensions.addEventListener('change', handler)

    return () => {
      Dimensions.removeEventListener('change', handler)
    }
  }, [])

  return orientation
}

export { useOrientation }
