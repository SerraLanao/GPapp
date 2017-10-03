import React, { Component } from 'react'
import { ActivityIndicator,View, Image, TouchableOpacity, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import API from '../Services/Api'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import weatherIcon from "../Utils/icons"
//import weatherImages from "../Utils/images"

// Styles
import styles from './Styles/WeatherScreenStyle'

class WeatherScreen extends Component {
  
  componentWillMount() {
    this.getData().done()
  } 

  constructor (props) {
    super(props)

    const hola = "Hola!"

    this.state = {
      icon: weatherIcon(),
      name: 'Madrid',
      temp: 20.1,
      country: 'España',
      weather: '',
      isLoading: true,

    };
  }

/*
  getData(){
    dataObjects = require('../Fixtures/weather.json')
    this.state.data = dataObjects
    console.log(this.state.data)
    this.state.icon = weatherIcon(dataObjects.weather[0].icon)
    console.log(this.state.icon)

  }
  */

  getData = async () => {
    const api = API.create()
    const weather = await api.getWeather()
    //this.state.data = weather.data
    //console.log(weather.data.condition.code);
    wIcon = weather.data.condition.code;
  
    this.setState({
      icon: weatherIcon(wIcon),
      temp: weather.data.condition.temp,
      weather: weather.data.condition.text,
      isLoading: false
    })
    
    //this.state.icon = weatherIcon(dataObjects.weather[0].icon)
    //console.log(this.state.icon)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
    return (
       <View style={[styles.container, styles.mainContainer]}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
            <View style={{alignItems: 'center', paddingBottom: 25}}>
              <Text style={styles.titleText}>Tiempo</Text>
            </View>
            <View style={styles.section, styles.centered}>
                <Icon style={styles.icon} name={this.state.icon} />
                <Text style={styles.temperature}>{this.state.temp} ºC</Text>
                <Text style={styles.location}>{this.state.name}, {this.state.country}</Text>
                <Text style={styles.weatherType}>{this.state.weather}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen)
