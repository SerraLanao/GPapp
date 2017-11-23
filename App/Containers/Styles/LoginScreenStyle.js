import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: - Metrics.images.logo /2 + Metrics.doubleBaseMargin ,
  },
  centered: {
    alignItems: 'center'
  },
  logoView:{
    height: Metrics.doubleSection,
    marginTop: Metrics.doubleSection
  },
})
