import React, { Component } from 'react';
import { NetInfo, Image, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function(iconCode) {
 
 const icons = {
      'partly-cloudy-day': require('./weather-icons/partly-cloudy-day.png'),
      'partly-cloudy-night': require('./weather-icons/partly-cloudy-night.png'),
      'Sunny': require('./weather-icons/clear-day.png'),
      'clear-night': require('./weather-icons/clear-night.png'),
      'rain': require('./weather-icons/rain.png'),
      'snow': require('./weather-icons/snow.png'),
      'sleet': require('./weather-icons/sleet.png'),
      'wind': require('./weather-icons/wind.png'),
      'fog': require('./weather-icons/fog.png'),
      'cloudy': require('./weather-icons/cloudy.png'),
      'hail': require('./weather-icons/hail.png'),
      'thunderstorm': require('./weather-icons/thunderstorm.png'),
      'tornado': require('./weather-icons/tornado.png'),
      'meteor-shower': require('./weather-icons/meteor-shower.png'),
      'default': require('./weather-icons/default.png')
    }

  return icons[icon] || return icons["default"];
}