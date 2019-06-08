import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import MainTabsNavigator from "./MainTabsNavigator";

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  App: { screen: MainTabsNavigator }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'App',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
