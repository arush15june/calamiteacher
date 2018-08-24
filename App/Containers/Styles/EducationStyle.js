import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  
  questionImageContainer: {
    backgroundColor: '#373F51',
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionImage: {
    resizeMode: 'stretch',
  },

  questionContainer: {
    backgroundColor: '#58A4B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  questionText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 4
  },

  choiceContainer: {
    backgroundColor: '#D8DBE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  choiceOne: {
    // backgroundColor: '#D8DBE2'
  },
  choiceTwo: {
    // backgroundColor: '#D8DBE2'
  }
})
