import React, { useState } from 'react'
import { View, TouchableOpacity, FlatList, Image, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as savedHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import LightText from '../../components/LightText/LightText'
import RegularText from '../../components/RegularText/RegularText'
import Separator from '../../components/Separator/Separator'
import Title from '../../components/Title/Title'
import SearchInput from '../../components/SearchInput/SearchInput'
import { getSeries, handleFavoriteSerie, filterSeries } from '../../actions'
import { useOrientation } from '../../hooks/useOrientation'
import Colors from '../../constants/Colors'
import styles from './SeriesScreen.styles'
import global from '../globalStyles'

const SerieListScreen = ({
  series,
  route,
  navigation,
  getSeries,
  favoriteList,
  handleFavoriteSerie,
  filterSeries,
}) => {
  const [searchValue, setSearchValue] = useState('')
  const orientation = useOrientation()
  const landscape = orientation === 'landscape'
  const {
    container,
    paddingLands,
    alignCenter,
    spaceBetween,
    flexOne,
    row,
    marginTopTen,
    marginRightTen,
  } = global
  const { seriesListWrapper } = styles

  const type = route?.params?.type
  const activeSerie = series[type]?.list
  const links = series[type]?.links

  const Item = ({ item }) => {
    const { canonicalTitle, ratingRank, coverImage, posterImage } = item.attributes
    const { listItemWrapper, listItemImage, serieListTitle, favoriteWrapper } = styles

    const handleSelectItem = () => {
      navigation.navigate('SerieDetailedScreen', { item: item })
    }
    const isFavorite = favoriteList?.find((i) => i.type === item.type && i.id === item.id)

    return (
      <TouchableOpacity onPress={handleSelectItem} style={listItemWrapper}>
        <Image
          style={listItemImage}
          source={{
            uri: coverImage?.small || posterImage?.small,
          }}
          defaultSource={require('../../assets/images/default-image.jpg')}
          resizeMode="cover"
        />
        <View style={flexOne}>
          <RegularText style={serieListTitle} text={canonicalTitle} />
          <LightText
            style={{ color: Colors.lightGray }}
            text={`Rating: ${ratingRank || '(No info)'}`}
          />
        </View>
        <TouchableOpacity
          style={favoriteWrapper}
          onPress={() => handleFavoriteSerie(favoriteList, item)}
        >
          <FontAwesomeIcon
            color={isFavorite ? Colors.red : Colors.lightGray}
            size={22}
            icon={isFavorite ? savedHeart : faHeart}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  const fetchSeries = async (type, url) => {
    await getSeries(type, url)
  }

  const handleFilterSeries = async (type, searchKey) => {
    await filterSeries(type, searchKey)
  }

  const handleSearch = async (text) => {
    setSearchValue(text)
    if (text.length > 2) {
      handleFilterSeries(type, text)
    }
  }

  return (
    <View style={[container, seriesListWrapper, landscape && paddingLands]}>
      <View style={[spaceBetween, flexOne]}>
        {landscape ? (
          <View style={row}>
            <View style={[marginTopTen, marginRightTen]}>
              <Title text={type} />
            </View>
            <View style={flexOne}>
              <SearchInput onChangeText={(text) => handleSearch(text)} value={searchValue} />
            </View>
          </View>
        ) : (
          <>
            <View style={alignCenter}>
              <Title text={type} />
              <Separator />
            </View>
            <SearchInput onChangeText={(text) => handleSearch(text)} value={searchValue} />
          </>
        )}
        <View style={flexOne}>
          <FlatList
            data={activeSerie}
            renderItem={Item}
            keyExtractor={(item, i) => i.toString()}
            showsVerticalScrollIndicator={false}
            onEndReached={() => fetchSeries(type, links?.next)}
            onEndReachedThreshold={0}
            onScrollBeginDrag={Keyboard.dismiss}
          />
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  series: state.seriesReducer.series,
  favoriteList: state.seriesReducer.favoriteList,
})

export default connect(mapStateToProps, { getSeries, handleFavoriteSerie, filterSeries })(
  SerieListScreen,
)
