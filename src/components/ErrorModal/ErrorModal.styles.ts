import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  modalWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '40%',
    borderRadius: 10,
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
  modalOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  title: {
    fontSize: '1.4rem',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  subtitle: {
    fontSize: '1.1rem',
    lineHeight: '1.5rem',
    textAlign: 'center',
    color: '$gray',
  },
  support: {
    color: '$red',
    fontSize: '1.1rem',
    lineHeight: '1.5rem',
    marginBottom: 30,
  },
})
