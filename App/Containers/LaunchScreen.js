import React, { Component } from 'react'
import { Alert, ScrollView, Text, Button, Image, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import { Images } from '../Themes'
import { Col, Row, Grid } from "react-native-easy-grid"

// Components
import {LEVELS, NO_QUESTIONS, WIN_TEXT, WIN_DISPLAY} from '../Components/Narrative'

// Styles
import styles from './Styles/LaunchScreenStyles'
import EduStyles  from './Styles/EducationStyle'

export default class LaunchScreen extends Component {
  

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>Education Container</Text>
      </ScrollView>
    )
  }
}
