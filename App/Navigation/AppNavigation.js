import { StackNavigator } from 'react-navigation'
import PersonalScreen from '../Containers/PersonalScreen'
import LoginScreen from '../Containers/LoginScreen'
import ImageViewerScreen from '../Containers/ImageViewerScreen'
import Chat from '../Containers/Chat'
import GalleryScreen from '../Containers/GalleryScreen'
import ChatListScreen from '../Containers/ChatListScreen'
import MapScreen from '../Containers/MapScreen'
import FormScreen from '../Containers/FormScreen'
import WeatherScreen from '../Containers/WeatherScreen'
import MainScreen from '../Containers/MainScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  PersonalScreen: { screen: PersonalScreen },
  LoginScreen: { screen: LoginScreen },
  ImageViewerScreen: { screen: ImageViewerScreen },
  Chat: { screen: Chat },
  GalleryScreen: { screen: GalleryScreen },
  ChatListScreen: { screen: ChatListScreen },
  MapScreen: { screen: MapScreen },
  FormScreen: { screen: FormScreen },
  WeatherScreen: { screen: WeatherScreen },
  MainScreen: { screen: MainScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
