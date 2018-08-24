import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
    padding:10
  },
  messageButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8DBE2',
    padding:10
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    alignItems: 'center'
  }
})
