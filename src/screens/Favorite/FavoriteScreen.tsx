import React from 'react'
import { View, TouchableOpacity, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import LightText from '../../components/LightText/LightText'
import RegularText from '../../components/RegularText/RegularText'
import Separator from '../../components/Separator/Separator'
import Title from '../../components/Title/Title'
import StyledButton from '../../components/StyledButton/StyledButton'
import { getSeries, handleFavoriteSerie } from '../../actions'
import { useOrientation } from '../../hooks/useOrientation'
import Colors from '../../constants/Colors'
import styles from './FavoriteScreen.styles'
import global from '../globalStyles'

const FavoriteScreen = ({ navigation, favoriteList, handleFavoriteSerie }) => {
  const orientation = useOrientation()
  const landscape = orientation === 'landscape'

  const { container, alignCenter, spaceBetween, flexOne, row, paddingLands, justifyEnd } = global
  const {
    seriesListWrapper,
    serieListType,
    noFavoriteWrapper,
    noFavTextWrapper,
    noFavText,
  } = styles

  const Item = ({ item }) => {
    const { canonicalTitle, ratingRank, coverImage, posterImage } = item.attributes
    const { listItemWrapper, listItemImage, serieListTitle, favoriteWrapper } = styles

    const handleSelectItem = () => {
      navigation.navigate('SerieDetailedScreen', { item: item })
    }

    return (
      <TouchableOpacity onPress={handleSelectItem} style={listItemWrapper}>
        <Image
          style={listItemImage}
          source={{ uri: coverImage?.small || posterImage?.small }}
          defaultSource={require('../../assets/images/default-image.jpg')}
          resizeMode="cover"
        />
        <View style={flexOne}>
          <RegularText style={serieListTitle} text={canonicalTitle} />
          <View style={[row, alignCenter]}>
            <LightText style={serieListType} text={item.type} />
            <LightText
              style={{ color: Colors.gray }}
              text={`Rating: ${ratingRank || '(No info)'}`}
            />
          </View>
        </View>
        <TouchableOpacity
          style={favoriteWrapper}
          onPress={() => handleFavoriteSerie(favoriteList, item)}
        >
          <FontAwesomeIcon color={Colors.red} size={22} icon={faTimesCircle} />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <View style={[container, seriesListWrapper, landscape && paddingLands]}>
      <View style={[spaceBetween, flexOne]}>
        <View style={alignCenter}>
          <Title text="Favorites" />
          <Separator />
        </View>
        {favoriteList.length > 0 ? (
          <View style={flexOne}>
            <FlatList
              data={favoriteList}
              renderItem={Item}
              keyExtractor={(item, i) => i.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <View style={[noFavoriteWrapper, landscape && row]}>
            <View style={noFavTextWrapper}>
              <LightText
                style={noFavText}
                text="You don't have any favorite series yet. Go to Series and start adding them!"
              />
              <StyledButton text="Series" onPress={() => navigation.navigate('Series')} />
            </View>
            <View style={[flexOne, alignCenter, justifyEnd]}>
              <Image
                resizeMode="contain"
                style={{ height: 300 }}
                source={require('../../assets/images/no-favorites.png')}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series,
  favoriteList: state.seriesReducer.favoriteList,
})

export default connect(mapStateToProps, { getSeries, handleFavoriteSerie })(FavoriteScreen)
