import React, { useCallback } from 'react'
import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Linking,
  Alert,
  Share,
} from 'react-native'
import { connect } from 'react-redux'
import LightText from '../../components/LightText/LightText'
import BoldText from '../../components/BoldText/BoldText'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as savedHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Colors from '../../constants/Colors'
import { handleFavoriteSerie } from '../../actions'
import { useOrientation } from '../../hooks/useOrientation'

import styles from './SeriesScreen.styles'
import global from '../globalStyles'

const SerieListScreen = ({ route, favoriteList, handleFavoriteSerie }) => {
  const orientation = useOrientation()
  const landscape = orientation === 'landscape'

  const { flexOne, row, flexTwo, paddingLands } = global
  const {
    detailedBkg,
    detailedBkgImage,
    detailedTitleWrapper,
    detailedTitle,
    favoriteWrapper,
    detailedPosterImage,
    detailedDivider,
    detailedSynopsisTitle,
    detailedSynopsis,
    detailedScrollWrapper,
  } = styles

  const item = route?.params?.item

  const {
    canonicalTitle,
    titles,
    synopsis,
    popularityRank,
    ratingRank,
    posterImage,
    coverImage,
    episodeCount,
    episodeLength,
    youtubeVideoId,
    chapterCount,
    userCount,
    ageRating,
  } = item?.attributes

  const isFavorite = favoriteList?.find((i) => i.type === item.type && i.id === item.id)

  const NumItem = ({ number, text }) => {
    const { numItemWrapper, numItemText, numItemNum } = styles
    return (
      <View style={numItemWrapper}>
        <BoldText style={numItemNum} text={number || '-'} />
        <LightText style={numItemText} text={text} />
      </View>
    )
  }

  const OpenYouTubeButton = ({ url }) => {
    const handleYouTubeLink = useCallback(async () => {
      const supported = await Linking.canOpenURL(url)

      if (supported) {
        await Linking.openURL(url)
      } else {
        Alert.alert(`Can't open this URL: ${url}`)
      }
    }, [url])

    return (
      <TouchableOpacity onPress={handleYouTubeLink}>
        <FontAwesomeIcon color={Colors.red} icon={faYoutube} size={30} />
      </TouchableOpacity>
    )
  }

  const handlShare = () => {
    const shareOptions = {
      title: 'Ojo Crítico App',
      message: `Hey! Look at this serie: ${canonicalTitle}`,
      url: 'www.ojocritico.com.ar',
      subject: 'Serie Recomendation',
    }
    Share.share(shareOptions)
  }

  return (
    <View>
      {!landscape && (
        <View style={{ backgroundColor: '#000' }}>
          <ImageBackground
            resizeMode="cover"
            style={detailedBkg}
            imageStyle={detailedBkgImage}
            source={{ uri: coverImage?.large || posterImage?.large }}
          />
        </View>
      )}

      <View style={[detailedTitleWrapper, landscape && paddingLands]}>
        <LightText style={detailedTitle} text={canonicalTitle} />
        <TouchableOpacity onPress={handlShare}>
          <FontAwesomeIcon color={Colors.lightGray} size={24} icon={faShareSquare} />
        </TouchableOpacity>
        <TouchableOpacity
          style={favoriteWrapper}
          onPress={() => handleFavoriteSerie(favoriteList, item)}
        >
          <FontAwesomeIcon
            color={isFavorite ? Colors.red : Colors.lightGray}
            size={24}
            icon={isFavorite ? savedHeart : faHeart}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[detailedScrollWrapper, landscape && paddingLands]}>
          <View style={{ marginBottom: 25, flexDirection: 'row' }}>
            <Image
              resizeMode="cover"
              style={detailedPosterImage}
              source={{ uri: posterImage?.small }}
            />
            <View style={flexTwo}>
              <View style={row}>
                <NumItem
                  number={episodeCount || chapterCount}
                  text={`${episodeCount ? 'Episode' : 'Chapter'} Count`}
                />
                <NumItem
                  number={episodeLength || userCount}
                  text={episodeLength ? 'Episode Length' : 'User Count'}
                />
              </View>
              <View style={row}>
                <NumItem number={popularityRank} text="Popularity" />
                <NumItem number={ratingRank || ageRating} text="Rating" />
              </View>
            </View>
          </View>
          <View style={detailedDivider} />
          <View style={flexOne}>
            <View style={row}>
              <BoldText style={detailedSynopsisTitle} text={titles?.en} />
              {!!youtubeVideoId && (
                <OpenYouTubeButton url={`http://www.youtube.com/watch?v=${youtubeVideoId}`} />
              )}
            </View>
            <LightText style={detailedSynopsis} text={synopsis} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer,
  favoriteList: state.seriesReducer.favoriteList,
})

export default connect(mapStateToProps, { handleFavoriteSerie })(SerieListScreen)
