import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    //marginBottom: 36,
    paddingTop: Metrics.section
  },
  row: {
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    borderRadius: Metrics.smallMargin,
    flexDirection:'row', 
    flexWrap:'wrap'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  centered: {
    alignItems: 'center'
  },
  v25: {
    width: (Metrics.screenWidth - Metrics.doubleBaseMargin)/4,
  },
  v50: {
    width: (Metrics.screenWidth - Metrics.doubleBaseMargin)/2,
  },
  v75: {
    width: ((Metrics.screenWidth - Metrics.doubleBaseMargin)/4)*3,
  },
  left:{
    textAlign: 'left',
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
