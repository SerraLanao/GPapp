import React, { Component } from 'react'
import { Alert, View, Image, TouchableOpacity, ScrollView, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Images, Metrics } from '../Themes'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator } from 'react-navigation'
import * as ImagePicker from 'react-native-image-picker';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import API from '../Services/Api'

import ImageViewerScreen from './ImageViewerScreen'

// Styles
import styles from './Styles/GalleryScreenStyle'

class GalleryScreen extends Component {
  
  constructor (props) {
    super(props)

    const dataObjects = {}

    this.state = {
      isLoading: true
    };

    this.getData()
  } 

  getData = async () => {
    
    const api = API.create();
    
    const chatList = await api.getGallery();

    console.log(chatList);
    
    //

    const usuarioList = chatList.data.map(usuer =>(
      <TouchableOpacity style={styles.row} key={usuer.id} onPress={() => {
    this.props.navigation.navigate('ImageViewerScreen', { img: usuer.image, user: 'Alexandre' })}}>
          <Image source={{uri: usuer.image}} style={styles.img} 
       />
      </TouchableOpacity>
    ));

    this.setState({
      isLoading: false,
      usuarioList: usuarioList
    })
  }

  _onPressButton= () => {
    this.props.navigation.navigate('ImageViewerScreen', { user: 'Lucy' })
  }

  addPhoto(){
  
    //Alert.alert('You\'ve upload a picture')

    //var ImagePicker = require('react-native-image-picker');
    
    console.log(ImagePicker)

    var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });

  }

  render () {
    return (
      <View style={[styles.container, styles.mainContainer]}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 11
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.addPhoto} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10,
          alignSelf: 'flex-end',  
        }}>
          <Icon style={styles.icon} name="add-a-photo" />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={styles.view}>
            {this.state.usuarioList}
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
  GalleryScreen: {screen: GalleryScreen},
  ImageViewerScreen: {screen:ImageViewerScreen}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'GalleryScreen',
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

//export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen)
