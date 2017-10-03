import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  img:{
  	height:Metrics.screenHeight,
  	width:Metrics.screenWidth
  }
})
