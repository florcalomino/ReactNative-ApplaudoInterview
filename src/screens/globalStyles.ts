import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  paddingLands: {
    paddingHorizontal: 50,
  },
  alignCenter: {
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  flexTwo: {
    flex: 2,
  },
  marginRightTen: {
    marginRight: 10,
  },
  marginBottomTen: {
    marginBottom: 10,
  },
  marginTopTen: {
    marginTop: 10,
  },
  fullWidth: {
    width: '100%',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  '@media (min-width: 760px)': {
    container: {
      paddingHorizontal: 100,
    },
    paddingLands: {
      paddingHorizontal: 100,
    },
  },
})
