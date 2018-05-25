import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, Image, View, StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base'

import MainStyles from './Main.Styles'
import Config from 'react-native-config'
import I18n from '../../I18n/'
I18n.initLanguage('vi')
export default class MainScreen extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>{Config.ROOT_URL}</Title>
          </Body>
        </Header>
        <Content>
          <View style={MainStyles.container}>
            <View style={MainStyles.center}>
              <Text
                style={{
                  fontFamily: 'IndieFlower'
                }}
              >
                This is main
              </Text>
              <Text>{I18n.t('welcome')}</Text>
              <Image style={{ width: 50, height: 50 }} source={require('../../Images/launch-icon.png')} />
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png' }}
              />
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <Image
                style={{ width: 66, height: 58 }}
                source={{
                  uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                }}
              />
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
