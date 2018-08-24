import React, { Component } from 'react'
import { Alert, ScrollView, Text, Button, Image, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Components
import { Col, Row, Grid } from "react-native-easy-grid"
import {LEVELS, NO_QUESTIONS, WIN_TEXT, WIN_DISPLAY} from '../Components/Narrative'

// Styles
import styles from './Styles/LaunchScreenStyles'
import EduStyles  from './Styles/EducationStyle'


class Education extends Component {
  constructor(props) {
    super(props)
    this._getCurrentLevel = this._getCurrentLevel.bind(this)
    this._verifyLevel = this._verifyLevel.bind(this)
    this._onPressChoiceOne = this._onPressChoiceOne.bind(this)
    this._onPressChoiceTwo = this._onPressChoiceTwo.bind(this) 

    this.state = {
      currentLevel: 0,
      questionText: LEVELS[0].question,
      questionImage: LEVELS[0].img,
      choiceOneText: LEVELS[0].options.choices[0].name,
      choiceTwoText: LEVELS[0].options.choices[1].name,
    }
  }
  
  _updateLevelState = () => {
    let currentLevel = this._getCurrentLevel()
    this.setState({
      questionText: LEVELS[currentLevel].question,
      questionImage: LEVELS[currentLevel].img,
      choiceOneText: LEVELS[currentLevel].options.choices[0].name,
      choiceTwoText: LEVELS[currentLevel].options.choices[1].name,
    })
  }

  _getCurrentLevel = () => {
    return this.state.currentLevel
  }

  _setNextLevel = () => {
    /*
      update state for next level
    */
    let level = this._getCurrentLevel()
    
    this.setState({
      currentLevel: level+1
    })

    this._updateLevelState()
  }

  _winAlert = () => {
    Alert.alert('Game Complete!', WIN_TEXT)
  }

  _setWinDisplay = () => {
    this.setState(WIN_DISPLAY)
  }

  _setGameComplete = () => {
    this._winAlert()
    this._setWinDisplay()
    this.setState({
      currentLevel: -1
    })
  }

  _incorrectText = () => {
    /*
      get incorrect answer's complimentary text from the level store
    */
    return LEVELS[this._getCurrentLevel()].options.incorrectText 
  }

  _correctText = () => {
    /*
      get correct answer's complimentary text from the level store
    */
    return LEVELS[this._getCurrentLevel()].options.correctText
  }

  _correctAnswerAlert = (win) => {
    /*
      Alert with text for correct answer.
    */
    if(!win) {
      Alert.alert(
        'Correct',
        this._correctText(),
        [
          {text: 'Next Question', onPress: () => this._setNextLevel()},
        ],
        { cancelable: false }
      )
    }
    else {
      Alert.alert(
          'Correct!',
          this._correctText(),
          [
            {text: 'Ok!', onPress: () => this._setGameComplete()},
          ],
          { cancelable: true }
        )
      }
    }

  _incorrectAnswerAlert = () => {
    /*
      Alert with text for incorrect answer.
    */
    Alert.alert('Incorrect', this._incorrectText())
  }
  
  _verifyLevel = (answerChoice) => {
    /*
      Verify selected choice index
      :param @int answerChoice
    */

    
    let correctChoice = LEVELS[this._getCurrentLevel()].options.correct
    console.log(correctChoice)

    if(answerChoice == correctChoice) {
      return true
    }
    else {
      return false
    }
  }

  levelVerification = (answer) => {
    /*
      Update for next level based on `answer`
      :param @bool answer
      
    */
    if(answer) {
      if(this._getCurrentLevel() != NO_QUESTIONS-1) { 
        this._correctAnswerAlert(false)
      }
      else {
        this._correctAnswerAlert(true)
      }
    }
    else {
      this._incorrectAnswerAlert()
    }
  }

  _onPressChoiceOne = () => {
    /* 
      Process answer when choice one is pressed
    */
    if(this._getCurrentLevel() == -1) {
      return
    }
   
    let answerChoice = 0
    let answer_verification = this._verifyLevel(answerChoice)

    this.levelVerification(answer_verification)
  }

  _onPressChoiceTwo = () => {
    /*
      Process answer when choice one is pressed
    */
    if(this._getCurrentLevel() == -1) {
      return
    }
    
    let answerChoice = 1
    let answer_verification = this._verifyLevel(answerChoice)

    this.levelVerification(answer_verification)
  }
  
  render() {
    // let currentLevel = this._getCurrentLevel()
    // let question = {
    //   questionText: LEVELS[currentLevel].question,
    //   questionImage: LEVELS[currentLevel].img,
    //   choiceOneText: LEVELS[currentLevel].options.choices[0].name,
    //   choiceTwoText: LEVELS[currentLevel].options.choices[1].name,
    // }
    
    return (
      <View style={styles.mainContainer}>
        <Grid>
          <Row style={EduStyles.questionImageContainer} size={70}>
            <Col>
              <Image source={this.state.questionImage} />
            </Col>
          </Row>

          <Row style={EduStyles.questionContainer} size={15}>
            <Col>
              <Text style={EduStyles.questionText}>{this.state.questionText}</Text>
            </Col>
          </Row>
          
          <Row style={EduStyles.choiceContainer} size={15}>
            <Col>
              <TouchableHighlight style={EduStyles.choiceOne} onPress={this._onPressChoiceOne} underlayColor='#D8DBE2'>
                  <Text style={EduStyles.choiceText}>{this.state.choiceOneText}</Text>
              </TouchableHighlight>
            </Col>
          
              <Col style={EduStyles.choiceTwo}>
                <TouchableHighlight onPress={this._onPressChoiceTwo} underlayColor='#D8DBE2' >
                  <Text style={EduStyles.choiceText}>{this.state.choiceTwoText}</Text>
                </TouchableHighlight>
              </Col>
          </Row>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Education)
