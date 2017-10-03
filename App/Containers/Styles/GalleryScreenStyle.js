import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  //
  container: {
    flex: 1,
    paddingTop: Metrics.section
  },
  view: {
    flex: 1,
    height: Metrics.screenHeight,
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'center',
  },
  row: {
    width: Metrics.screenWidth / 3 - Metrics.doubleBaseMargin,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    borderRadius: Metrics.smallMargin,
  },
  img:{
    width: Metrics.screenWidth / 3 - Metrics.doubleBaseMargin, 
    height: 100
  },
   icon:{
    fontSize:Metrics.icons.medium,
    color: Colors.fire,
  }
})
