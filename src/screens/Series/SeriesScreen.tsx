import React, { useState } from 'react'
import { View, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { getSeries } from '../../actions'
import RegularText from '../../components/RegularText/RegularText'
import Title from '../../components/Title/Title'
import Separator from '../../components/Separator/Separator'
import { useOrientation } from '../../hooks/useOrientation'

import styles from './SeriesScreen.styles'
import global from '../globalStyles'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const SerieItem = ({ text, onPress, bkg, landscape }) => {
  const { serieItem, serieItemLands, serieItemBkg, textWrapper, serieItemText } = styles
  return (
    <TouchableOpacity style={[serieItem, landscape && serieItemLands]} onPress={onPress}>
      <ImageBackground
        style={serieItemBkg}
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
        source={bkg}
      >
        <View style={textWrapper}>
          <RegularText text={text} style={serieItemText} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const SeriesScreen = ({ navigation, getSeries }) => {
  const [loading, setLoading] = useState(false)
  const orientation = useOrientation()
  const landscape = orientation === 'landscape'

  const { container, alignCenter, row, justifyCenter, selfCenter, flexOne } = global

  const fetchSeries = async (type) => {
    return await getSeries(type)
  }

  const handleSerieNavigation = (type) => {
    setLoading(true)
    fetchSeries(type).then((succeded) => {
      setLoading(false)
      succeded && navigation.navigate('SerieListScreen', { type: type })
    })
  }

  return (
    <View style={container}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.lightGray} style={[flexOne, selfCenter]} />
      ) : (
        <>
          <View style={alignCenter}>
            <Title text="Series" />
            <Separator />
          </View>
          <View style={landscape && [row, justifyCenter]}>
            <SerieItem
              text="Anime"
              onPress={() => handleSerieNavigation('anime')}
              bkg={require('../../assets/images/anime.jpg')}
              landscape={landscape}
            />
            <SerieItem
              text="Manga"
              onPress={() => handleSerieNavigation('manga')}
              bkg={require('../../assets/images/manga.jpg')}
              landscape={landscape}
            />
          </View>
        </>
      )}
    </View>
  )
}

const mapStateToProps = (state) => ({
  anime: state.seriesReducer.anime,
})

export default connect(mapStateToProps, { getSeries })(SeriesScreen)
