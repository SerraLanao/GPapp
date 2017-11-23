import React, { Component } from 'react'
import { Image, View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PersonalScreenStyle'
import Loading from '../Components/Loading'

class PersonalScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }

  }

  componentDidMount() {
    AsyncStorage.getItem('@user:email').then((token) => {
      this.setState({
        isLoading: false,
        email: token,
      });
    });
  }

  render () {
    if(this.state.isLoading){
      return (
        <Loading />
      );
    }else{
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
                 <Text>¡Hola {this.state.email}!</Text>
          </ScrollView>
        </View>
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalScreen)
