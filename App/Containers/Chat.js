import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ScrollView, Text, AsyncStorage } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import SocketIOClient from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';
//import { StackNavigator } from 'react-navigation'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatStyle'

const USER_ID = '@userId';
const id = Math.random();

class Chat extends Component {

  /*
  constructor (props) {
    super(props)
    this.state = {}
    this.socket = SocketIOClient('http://172.17.1.7:80');
  }

  render () {
    return (
       <View style={[styles.container, styles.mainContainer]}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
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
            </View>
            <View style={styles.section, styles.centered}>
                <Text style={styles.weatherType}>CHAT!!</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

/*
export default StackNavigator({
  ChatListScreen: {screen: ChatListScreen},
  TestScreen: {screen: TestScreen},
  Chat: {screen:Chat},
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'ChatListScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  }
)
*/

constructor(props) {
    super(props);

    this.state = {
      messages: [],
      userId: null
    };

    this.determineUser = this.determineUser.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    this.socket = SocketIOClient('http://172.17.1.7:80');
    this.socket.on('message', this.onReceivedMessage);
    //this.determineUser();
  }

  /**
   * When a user joins the chatroom, check if they are an existing user.
   * If they aren't, then ask the server for a userId.
   * Set the userId to the component's state.
   */
  determineUser() {
    AsyncStorage.getItem(USER_ID)
      .then((userId) => {
        // If there isn't a stored userId, then fetch one from the server.
        if (!userId) {
          this.socket.emit('userJoined', null);
          this.socket.on('userJoined', (userId) => {
            AsyncStorage.setItem(USER_ID, userId);
            this.setState({ userId });
          });
        } else {
          this.socket.emit('userJoined', userId);
          this.setState({ userId });
        }
      })
      .catch((e) => alert(e));
  }

  // Event listeners
  /**
   * When the server sends a message to this.
   */
  onReceivedMessage(messages) {
    console.log(messages)
    this._storeMessages(messages);
  }

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend(messages=[]) {
    this.socket.emit('message', messages[0]);
    this._storeMessages(messages);
  }

  render() {
    var user = { _id: this.state.userId || id };
    return (
       <View style={[styles.container, styles.mainContainer]}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={user}
        />
        
      </View>
    )
    /*
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center', paddingBottom: 25}}>
      </View>
    </ScrollView>
        */
  }

  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
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

export default connect(mapStateToProps, mapDispatchToProps)(Chat)