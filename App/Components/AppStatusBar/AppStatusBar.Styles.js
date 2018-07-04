import { Platform, StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
})
