import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  serieItem: {
    marginBottom: 16,
    borderColor: '$white',
    borderWidth: 1,
    borderRadius: 10,
  },
  serieItemBkg: {
    width: '100%',
    borderRadius: 10,
  },
  textWrapper: {
    paddingHorizontal: 30,
    paddingTop: 70,
    paddingBottom: 35,
    borderRadius: 10,
  },
  serieItemText: {
    color: '$white',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  listItemWrapper: {
    backgroundColor: '$white',
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: '#e7e7e7',
  },
  seriesListWrapper: {
    paddingBottom: 0,
    marginBottom: 0,
  },
  serieListTitle: {
    fontSize: '1.1rem',
  },
  favoriteWrapper: {
    width: 40,
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  serieListType: {
    fontSize: '1.1rem',
    marginRight: 5,
    color: '$red',
    textTransform: 'capitalize',
  },
  noFavoriteWrapper: {
    flex: 1,
    paddingTop: 20,
  },
  noFavTextWrapper: {
    flex: 1,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  noFavText: {
    textAlign: 'center',
    fontSize: '1.1rem',
    marginBottom: 20,
  },
})
