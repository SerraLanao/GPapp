import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    //marginBottom: 36,
    paddingTop: Metrics.section
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    //marginTop: Metrics.doubleBaseMargin 
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  componentButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  apiButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  usageButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  deviceButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderTopWidth: 1
  },
  temperature: {
    fontSize: 62,
    fontWeight: "100",
    margin: 0
  },
  location: {
    fontSize: 14,
    fontWeight: "100",
    marginBottom: 20,
  },
  weatherType: {
    fontSize: 34,
    fontWeight: "500"
  },
  icon:{
  	fontSize:180
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
