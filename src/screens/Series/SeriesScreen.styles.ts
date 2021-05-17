import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  serieItem: {
    marginBottom: 16,
    borderColor: '$white',
    borderWidth: 1,
    borderRadius: 10,
  },
  serieItemLands: {
    width: '40%',
    marginHorizontal: 10,
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
    marginLeft: 10,
  },
  detailedBkgImage: {
    opacity: 0.4,
  },
  detailedBkg: {
    width: '100%',
    height: 120,
  },
  detailedTitleWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '$white',
    flexDirection: 'row',
  },
  detailedTitle: {
    fontSize: '1.4rem',
    flex: 1,
  },
  numItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: '$white',
    borderRadius: 5,
  },
  numItemText: {
    textTransform: 'uppercase',
    fontSize: 13,
    textAlign: 'center',
    color: '$gray',
  },
  numItemNum: {
    fontSize: 22,
    color: 'red',
  },
  detailedPosterImage: {
    flex: 1,
    borderRadius: 5,
    marginRight: 20,
  },
  detailedDivider: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#e7e7e7',
    height: 1,
    marginBottom: 20,
  },
  detailedSynopsisTitle: {
    fontSize: '1.3rem',
    marginBottom: 10,
    marginTop: 2,
    marginRight: 10,
    color: '$black',
  },
  detailedSynopsis: {
    lineHeight: '1.4rem',
    color: '$gray',
  },
  detailedScrollWrapper: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 250,
  },

  '@media (min-width: 760px)': {
    textWrapper: {
      height: 250,
    },
  },
})
