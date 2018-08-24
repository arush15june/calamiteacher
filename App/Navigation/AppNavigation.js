import { TabNavigator } from 'react-navigation'
import Helpline from '../Containers/Helpline'
import Education from '../Containers/Education'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  Education: { 
    screen: Education,
    navigationOptions: {
              title: "CalamiTeacher"
            } 
  },
  Helpline: {
    screen: Helpline,
    navigationOptions: {
              title: "Helpline"
            }
   }

}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Education',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
