import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  searchWrapper: {
    marginBottom: 20,
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 25,
    backgroundColor: '$white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: '1rem',
    color: '$gray',
    flex: 1,
    paddingVertical: 10,
  },
  icon: { 
    marginRight: 10, 
    color: '#d9dadd', 
    position: 'absolute',
    right: 20,
  }
});
