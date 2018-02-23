import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableOpacity,AsyncStorage,AppState,Alert,Platform } from 'react-native'
import { Images } from '../Themes'
import BoxButton from '../Components/BoxButton'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import PushNotificationComponent from '../Components/PushNotification'
import PushNotification from 'react-native-push-notification';

//Screens
import WeatherScreen from './WeatherScreen'
import FormScreen from './FormScreen'
import MapScreen from './MapScreen'
import ChatListScreen from './ChatListScreen'
import GalleryScreen from './GalleryScreen'
import PersonalScreen from './PersonalScreen'
import Login from './LoginScreen'
import Loading from '../Components/Loading'

//var PushNotification = require('react-native-push-notification');

var response = "Not Null";
/*
PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
        Alert.alert('TOKEN:',JSON.stringify(token));
        response = JSON.stringify(token);
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
        Alert.alert('NOTIFICATION:',JSON.stringify(notification));
        Alert.alert("¿Token?", response);
        
    },

    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID: "AIzaSyAZdW_w99Rc8Gb_gTHnbCaVh8bCb0Y-BvY",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    //
      // (optional) default: true
      // - Specified if permissions (ios) and token (android and ios) will requested or not,
      // - if not, you must call PushNotificationsHandler.requestPermissions() later
      //
    requestPermissions: false
  });
  */
// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {

 constructor(props){
  super(props);

  this.handleAppStateChange = this.handleAppStateChange.bind(this);

  this.state = {
    isLogin: false,
    isLoading: true
  }

}

componentWillUnmount() {
  AppState.removeEventListener('change', this.handleAppStateChange);
}


componentDidMount() {
  AppState.addEventListener('change', this.handleAppStateChange);

  AsyncStorage.getItem('@user:email').then((token) => {
    var isLogin = false;
    if(token == null){isLogin = false;}else{isLogin = true;}
      //console.log(token+"-->"+isLogin);
      this.setState({
        isLoading: false,
        isLogin: isLogin,
      });

    });
}

handleAppStateChange(appState) {
  /*
  if (appState === 'background') {
      let date = new Date(Date.now() + (5 * 1000));

      if (Platform.OS === 'ios') {
        date = date.toISOString();
      }

      PushNotification.localNotificationSchedule({
        message: "My Notification Message",
        date,
      });
    }
    */
}

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
  /*
  PushNotification.requestPermissions()
  PushNotification.localNotificationSchedule({
      message: "New message from XXXXX", // (required)
      date: new Date(Date.now() + (5 * 1000)) // in 5 secs
    });
  */
  this.props.navigation.navigate('ChatListScreen')
}
openChatList2 = () => {
   //this.props.navigation.navigate('ChatList2') 
 }
 openGaleria = () => {
  this.props.navigation.navigate('GalleryScreen')
}
openPersonal = () => {
  this.props.navigation.navigate('PersonalScreen')
}

onChange = (isLogin) => {
  this.setState({ isLogin });
}
render () {
  const { isLogin } = this.state;
  if(this.state.isLoading){
    return (
      <Loading />
      );
  }else if (! this.state.isLogin){
    return(
      <Login isLogin={isLogin} onChange={this.onChange} />
      )
  }else{
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
            <BoxButton onPress={this.openPersonal} style={styles.usageButton} image={Images.contact} text='Seccion Personal' />
          </View>
          <PushNotificationComponent />
        </ScrollView>
      </View>
      )
  }
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
  PersonalScreen: {screen: PersonalScreen},
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
