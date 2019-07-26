import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import HomePage from './components/pages/home-page'
import RegisterUserPage from './components/pages/register-user-page'

/**
 * Stacks configuration
 */
const ExternalStack = createStackNavigator({
  RegisterUser: RegisterUserPage
}, {
  initialRouteName: 'RegisterUser',
  headerMode: 'none'
})

const InternalStack = createStackNavigator({
  Home: HomePage
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})

const Switcher = createSwitchNavigator({
  ExternalStack,
  InternalStack
}, {
  initialRouteName: 'ExternalStack'
})

const Navigator = createAppContainer(Switcher)

export default Navigator
