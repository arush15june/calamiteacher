import React, { Component } from 'react'
import { Alert, ScrollView, Text, TextInput, Button, Image, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import { Col, Row, Grid } from "react-native-easy-grid"
import { TextField } from 'react-native-material-textfield';

// Styles
import styles from './Styles/HelplineStyle'

class Helpline extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  _getMessage = () => {
    return this.state.text
  }
  
  _sendMessage = () => {
    message = this._getMessage()
    console.log(message)

  }
  
  render () {
    let { text } = this.state;

    return (
      <View>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>Relief Helpline</Text>
        </View>

        <View style={{padding: 10}}>
          <TextInput
            placeholder='Write your message here'
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>

        <View style={{padding: 10}}>
          <Button
            onPress={this._sendMessage}
            title="Send Message"
          />
        </View>
        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Helpline)
