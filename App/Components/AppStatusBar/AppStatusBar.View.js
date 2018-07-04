import React, { Component } from 'react'
import { View, StatusBar} from 'react-native'

import PropTypes from 'prop-types'
import styles from './AppStatusBar.Styles'

export default class AppStatusBar extends Component {

  static defaultProps = {
    backgroundColor: 'transparent',
    barStyle: 'light-content'
  }

  static propTypes = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.string
  }

  render () {
    const {
      backgroundColor,
      barStyle
    } = this.props
    return (
      <View style={[styles.statusBar, {backgroundColor}]}>
        <StatusBar translucent backgroundColor={backgroundColor} barStyle={barStyle} />
      </View>
    )
  }
}
