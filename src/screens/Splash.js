import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

export class Splash extends Component {
  render() {
    return (
      <Text>Hello</Text>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)