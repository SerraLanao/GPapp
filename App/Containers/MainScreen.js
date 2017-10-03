import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import BoxButton from '../Components/BoxButton'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

//Screens
import WeatherScreen from './WeatherScreen'
import FormScreen from './FormScreen'
import MapScreen from './MapScreen'
import ChatListScreen from './ChatListScreen'
import GalleryScreen from './GalleryScreen'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
 
  openWeather = () => {
    this.props.navigation.navigate('WeatherScreen')
  }
  openMap = () => {
    this.props.navigation.navigate('MapScreen')
  }
  openForm = () => {
    this.props.navigation.navigate('FormScreen')
  }
  openChatList = () => {
   this.props.navigation.navigate('ChatListScreen') 
  }
  openChatList2 = () => {
   //this.props.navigation.navigate('ChatList2') 
  }
  openGaleria = () => {
    this.props.navigation.navigate('GalleryScreen')
  }
/*
<TouchableOpacity style={{
  position: 'absolute',
  paddingTop: 30,
  paddingHorizontal: 10,
  zIndex: 10
}}>
  <Image source={Images.closeButton} />
</TouchableOpacity>
*/
  render () {
    return (
<View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.logoView}>
            <View style={styles.centered} >
              <Image source={Images.GPb} style={styles.logo} />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <BoxButton onPress={this.openChatList} style={styles.componentButton} image={Images.faq} text='Chat' />
            <BoxButton onPress={this.openGaleria} style={styles.usageButton} image={Images.gallery} text='Galeria' />
          </View>
          <View style={styles.buttonsContainer}>
            <BoxButton onPress={this.openForm} style={styles.apiButton} image={Images.form} text='Formulario' />
            <BoxButton onPress={this.openWeather} image={Images.weather} text='Tiempo' />
          </View>
          <View style={styles.buttonsContainer}>
            <BoxButton onPress={this.openMap} style={styles.deviceButton} image={Images.map} text='Mapas' />
            <BoxButton onPress={this.openChatList2} style={styles.usageButton} image={Images.contact} text='Seccion Personal' />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default StackNavigator({
  MainScreen: {screen: MainScreen},
  WeatherScreen: {screen: WeatherScreen},
  FormScreen: {screen: FormScreen},
  MapScreen: {screen: MapScreen},
  ChatListScreen: {screen: ChatListScreen},
  GalleryScreen: {screen: GalleryScreen},
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'MainScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})

//export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
