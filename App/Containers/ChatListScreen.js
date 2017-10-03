import React, { Component } from 'react'
import { ActivityIndicator,Button, Alert, View, Image, TouchableOpacity, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import { StackNavigator } from 'react-navigation'

import API from '../Services/Api'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatListScreenStyle'

import Chat from './Chat'



class ChatListScreen extends Component {
  
  componentWillMount() {
    this.getData().done()
  } 

  constructor (props) {
    super(props)

    const dataObjects = {}

    this.state = {
      isLoading: true,
      dataSource: dataObjects
    };

    this.getData()
  }

  openChat = () => {
    this.props.navigation.navigate('Chat')
  }

  getData = async () => {
    
    const api = API.create();
    
    const chatList = await api.getChatList();

    console.log(chatList);

    const usuarioList = chatList.data.usuarios.map(usuer =>(
      <TouchableOpacity style={styles.row} key={usuer.id} onPress={this.openChat}>
        <View style={styles.v25}>
          <Image style={{width: 100, height: 50, 
            resizeMode: Image.resizeMode.contain}} source={{uri: usuer.image}}/>
        </View>
        <View style={styles.v75}>
          <Text style={styles.boldLabel}>{usuer.name}</Text>
        </View>
      </TouchableOpacity>
    ));

    this.setState({
      isLoading: false,
      usuarioList: usuarioList
    })
  }

/*
  buttonsListArr = this.state.dataSource.map(
    buttonInfo => 
        <TouchableOpacity style={styles.row}>
        <View style={styles.v25}>
          <Image style={{width: 100, height: 50, 
            resizeMode: Image.resizeMode.contain}} source={{uri: buttonInfo.image}}/>
        </View>
        <View style={styles.v75}>
          <Text style={styles.boldLabel}>{buttonInfo.name}</Text>
        </View>
      </TouchableOpacity>
);
*/
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
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={{alignItems: 'center', paddingBottom: 25}}>
              <Text style={styles.titleText}>Chats</Text>
          </View>
          <View style={styles.section, styles.centered}>
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
  ChatListScreen: {screen: ChatListScreen},
  Chat: {screen:Chat}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'ChatListScreen',
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

//export default connect(mapStateToProps, mapDispatchToProps)(ChatListScreen)
