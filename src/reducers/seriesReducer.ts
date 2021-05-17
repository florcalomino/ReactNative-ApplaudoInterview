const initialState = {
  series: {
    anime: {
      list: [],
      links: {},
    },
    manga: {
      list: [],
      links: {},
    },
  },
  favoriteList: [],
  appError: '',
}

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SERIES':
      const { type, list, links } = action.payload
      const currentList = state?.series?.[type]?.list

      return {
        ...state,
        series: {
          ...state.series,
          [type]: {
            list: [...currentList, ...list],
            links,
          },
        },
      }
    case 'FILTER_SERIES':
      return {
        ...state,
        series: {
          ...state.series,
          [action.payload.type]: {
            list: action.payload.list,
            links: action.payload.links,
          },
        },
      }
    case 'HANDLE_FAVORITE':
      return {
        ...state,
        favoriteList: action.payload,
      }
    case 'ON_ERROR':
      return {
        ...state,
        appError: action.payload,
      }
    default:
      return state
  }
}

export default seriesReducer
