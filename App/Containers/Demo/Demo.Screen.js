import React, { Component } from 'react'
import { Dimensions, ScrollView, Text, Image, View, StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base'

import { connect } from 'react-redux'
import { DemoAction } from './Demo.Action'

export class DemoScreen extends Component {
  render() {
    return (
      <Content>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
        <Button onPress={() => this.props.getFakeData(DemoAction.fakeDataRequest())}>
          <Text>Test data</Text>
        </Button>
        <Button onPress={() => this.props.getGithubUser(DemoAction.restApiRequest('nhancv'))}>
          <Text>Fetch user</Text>
        </Button>

        {this.props.isFetching ? (
          <Text>Fetching...</Text>
        ) : (
          <View>
            <Text>Data: {this.props.data}</Text>
            {this.props.error ? <Text>Has error</Text> : null}
          </View>
        )}
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.demo.isFetching,
    data: state.demo.data,
    error: state.demo.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFakeData: request => dispatch(request),
    getGithubUser: request => dispatch(request)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoScreen)
