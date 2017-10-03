import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
//import { StackNavigator } from 'react-navigation'
import RoundedButton from '../Components/RoundedButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatStyle'


class Chat extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  openChat = () => {
    this.props.navigation.navigate('TestScreen')
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
              <Text style={styles.titleText}>Tiempo</Text>
            </View>
            <View style={styles.section, styles.centered}>
                <Text style={styles.weatherType}>CHAT!!</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
