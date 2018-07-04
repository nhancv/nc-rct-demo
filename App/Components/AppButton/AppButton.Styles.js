import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  TouchableOpacity: {
    height: 44,
    alignSelf: 'center',
    alignItems: 'center'
  },
  LinearGradient: {
    overflow: 'hidden',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  Text: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'SFProText-Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    color: '#262B2D',
    lineHeight: 24,
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30
  }
})
