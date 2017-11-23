import React, { Component } from 'react'
import { Alert, View, Image, TouchableOpacity, ScrollView, Text, KeyboardAvoidingView,AsyncStorage } from 'react-native'
import { Form,Separator,InputField, LinkField,SwitchField, PickerField,DatePickerField,TimePickerField} from 'react-native-form-generator';
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { StackNavigator } from 'react-navigation'
import API from '../Services/Api.js'
import md5 from "react-native-md5";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

/*
class LoginScreen extends Component {
  
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <Text>LoginScreen</Text>
      </KeyboardAvoidingView>
    </ScrollView>
  render () {
    return (
      <View style={styles.mainContainer}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
      </View>
    )
  }
}
*/

class LoginScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      formData:{},
      result: '',
      email: false
    }
  }

  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);

    //console.log(this.state.formData)
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }

  sendForm(){

    if (!this.state.email){
      Alert.alert("Email incorrecto");  
      return false;
    }

    this.state.formData.passwd = md5.hex_md5( this.state.formData.passwd);

    var servSend = JSON.stringify(this.state.formData)

    this.sendData()
    //window.alert(this.state.result.ok)
  }

  sendData = async () => {
    const api = API.create()
    //const result = await api.getRoot()
    const send = await api.postLogin(this.state.formData)
    //const send = await api.postForm("hola")
    //this.state.data = weather.data
    
    var result = send.data
    const { isLogin } = this.props;

    console.log(result);

    if(result.estado == "ko"){
      Alert.alert(result.message);  
      return false;
    }else if (result.estado == "ok"){
      try {
        await AsyncStorage.setItem('@user:email', result.email);
        console.log(result);
        this.props.onChange(true);
      } catch (error) {
        console.log("Error en guardar el contacto: "+ error)
      }
    }
    this.setState({
      //result: result.ok
    })
   
  }

  render () {
    return (
      <View style={[styles.container, styles.mainContainer, styles.pBottom]}>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <View style={styles.centered} >
              <Image source={Images.GPb} style={styles.logo} />
            </View>  
          </View>
          <View style={{paddingBottom: 45,paddingTop: 65}}>
              <Form
                ref='registrationForm'
                onFocus={this.handleFormFocus.bind(this)}
                onChange={this.handleFormChange.bind(this)}
                label="Personal Information"
                style={{paddingBottom:10}}
              >
              <Separator />
              <InputField
                ref='email'
                placeholder='E-mail'
                keyboardType = 'email-address'
                style={styles.input}
                iconRight={
                  <Icon name='check'
                    size={20}
                    style={[
                      {marginTop:11, color:"rgba(0,0,0,0)" },
                      ((self)=>{
                        if(Object.keys(self.refs).length !== 0){
                          if(!self.refs.registrationForm.refs.email.valid){
                            return {color:'#d52222'}
                          }else{
                            return {color:'#61d062'}
                          }
                        }
                      }
                      )(this)]}
                    />
                }  //React Component
                validationFunction = {(value)=>{
                  if(value == ''){ this.state.email = false;return false;}
                  //Initial state is null/undefined
                  if(!value){ this.state.email = false;return false;}
                  // Check if First Name Contains Numbers
                  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                  var matches = value.match(re);
                  if (matches == null) {this.state.email = false;return false;}
                  
                  this.state.email = true
                  return true;
                }}
              />
              <InputField
                ref='passwd'
                placeholder='Password'
                keyboardType = 'default'
                secureTextEntry={ true }
                style={styles.input}
              />
              </Form>
              <RoundedButton 
                text="Enviar"
                onPress={() => this.sendForm()}
              />
            </View>
        </View>
      </View>
    )
  }
}

/*
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
*/
export default connect()(LoginScreen)

