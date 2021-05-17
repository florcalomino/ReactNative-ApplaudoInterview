import AsyncStorage from '@react-native-async-storage/async-storage'
import { snakeCase } from '../utils/stringUtils'

export const getSeries = (type, customUrl = undefined) => async (dispatch) => {
  let succeded = true
  try {
    const url = customUrl || `https://kitsu.io/api/edge/${type}?page[limit]=5&page[offset]=0`
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(`Got ${type} series with payload:`, res)
        dispatch({
          type: 'FETCH_SERIES',
          payload: {
            list: res.data,
            links: res.links,
            type,
          },
        })
      })
  } catch (error) {
    console.log(`Error getting ${type} series`, error)
    succeded = false
    dispatch({
      type: 'ON_ERROR',
      payload: error,
    })
  } finally {
    return succeded
  }
}

export const filterSeries = (type, searchKey) => async (dispatch) => {
  try {
    const sanitizedKey = snakeCase(searchKey)
    const url = `https://kitsu.io/api/edge/${type}?filter[text]=${sanitizedKey}`

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(`Filter ${type} series with payload:`, res.data)
        dispatch({
          type: 'FILTER_SERIES',
          payload: {
            list: res.data,
            links: res.links,
            type,
          },
        })
      })
  } catch (error) {
    console.log(`Error getting ${type} series`, error)
    dispatch({
      type: 'ON_ERROR',
      payload: error,
    })
  }
}

export const handleFavoriteSerie = (favoriteList, item) => async (dispatch) => {
  try {
    let newFavoriteList = [...favoriteList]

    if (newFavoriteList.find((i) => i.type === item.type && i.id === item.id)) {
      newFavoriteList = newFavoriteList.filter((i) => i !== item)
    } else {
      newFavoriteList = [...newFavoriteList, item]
    }

    await AsyncStorage.setItem('favoriteList', JSON.stringify(newFavoriteList))
    dispatch({
      type: 'HANDLE_FAVORITE',
      payload: newFavoriteList,
    })
    console.log('Save favorite in local storage with payload: ', newFavoriteList)
  } catch (error) {
    console.log(`Error saving serie in favorites`, error)
    dispatch({
      type: 'ON_ERROR',
      payload: error,
    })
  }
}

export const getLocalStorage = () => async (dispatch) => {
  try {
    const localFavoriteList = await AsyncStorage.getItem('favoriteList')
    if (localFavoriteList) {
      const newFavoriteList = JSON.parse(localFavoriteList as any)
      dispatch({
        type: 'HANDLE_FAVORITE',
        payload: newFavoriteList,
      })
      console.log('Got local storage with payload: ', newFavoriteList)
    }
  } catch (error) {
    console.log(`Error getting local storage`, error)
  }
}

export const cleanErrorMessage = () => (dispatch) => {
  try {
    dispatch({
      type: 'ON_ERROR',
      payload: '',
    })
    console.log('The error msg has been cleaned')
  } catch (error) {
    console.log('Error cleaning error msg', error)
  }
}
