import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  traitItem: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 70,
  },
  traitText: {
    marginTop: 8,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: '0.8rem',
    color: '$gray',
  },
  traitBkg: {
    width: '100%',
    height: 130,
    marginTop: 10,
  },
  traitScrollview: {
    marginTop: 52,
    paddingHorizontal: 20,
  },
  mainBkg: {
    width: '100%',
    height: 120,
  },
  mainWrapper: {
    paddingHorizontal: 20,
    backgroundColor: '$white',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  picBorder: {
    width: 106,
    height: 106,
    borderRadius: 100,
    backgroundColor: '$white',
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameWrapper: {
    marginLeft: 18,
    marginTop: 10,
  },
  name: {
    fontSize: '1.4rem',
    marginTop: 8,
  },
  role: {
    fontSize: '1.1rem',
    color: '$gray',
  },
  subtitle: {
    fontSize: '1.2rem',
  },
  knowledgeItem: {
    width: '95%',
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  knowledgeText: {
    marginLeft: 8,
    fontSize: '1.1rem',
    color: '$gray',
  },
  jobItem: {
    marginBottom: 10,
    backgroundColor: '$white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  jobTitle: {
    fontSize: '1.2rem',
  },
  jobPosition: {
    marginTop: 8,
    fontSize: '1rem',
    color: '$lightGray',
  },
  jobDescription: {
    fontSize: '1rem',
    marginBottom: 10,
    color: '$gray',
  },
  mailLink: {
    backgroundColor: '$white',
    borderRadius: 40,
    height: 38,
    width: 38,
    marginTop: -20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  langItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  langText: {
    color: '$white',
    fontSize: '1.5rem',
    marginBottom: 3,
  },
  langLevel: {
    color: '$white',
    fontSize: '0.6rem',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  '@media (min-width: 760px)': {
    traitScrollview: {
      paddingHorizontal: 100,
    },
    mainWrapper: {
      paddingHorizontal: 100,
    },
  },
})
