import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    borderWidth: 0,
    elevation: 0,
    marginBottom:-10
  },
  cardImage: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 180,
    width: 350,
    elevation: 5,
    resizeMode: 'cover'
  },
  cardImageSmall: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 90,
    width: 350,
    elevation: 5,
    resizeMode: 'cover'
  }
})
