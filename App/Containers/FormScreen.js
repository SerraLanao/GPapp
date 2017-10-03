import React, { Component } from 'react'
import { Alert, View, Image, TouchableOpacity, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { Form,Separator,InputField, LinkField,SwitchField, PickerField,DatePickerField,TimePickerField} from 'react-native-form-generator';
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import API from '../Services/Api'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FormScreenStyle'

class FormularioScreen extends Component {
  
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
      Alert.alert("email -->"+this.state.formData.email)  
      return false;
    }
    

    var servSend = JSON.stringify(this.state.formData)

    this.sendData()
    //window.alert(this.state.result.ok)
  }

  sendData = async () => {
    const api = API.create()
    //const result = await api.getRoot()
    const send = await api.postForm(this.state.formData)
    //const send = await api.postForm("hola")
    //this.state.data = weather.data
    
    console.log(send)
    

    this.setState({
      result: result.ok
    })

    window.alert(result.data.status)
    //this.state.icon = weatherIcon(dataObjects.weather[0].icon)
    //console.log(this.state.icon)
  }

  render () {
    return (
      <View style={[styles.container, styles.mainContainer, styles.pBottom]}>
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
              <Text style={styles.titleText}>Formulario</Text>
            </View>
            <View style={{paddingBottom: 45}}>
              <Form
                ref='registrationForm'
                onFocus={this.handleFormFocus.bind(this)}
                onChange={this.handleFormChange.bind(this)}
                label="Personal Information"
                style={{paddingBottom:10}}
              >
              <Separator />
              <InputField
                ref='name'
                placeholder='First Name'
                helpText={((self)=>{
                  if(Object.keys(self.refs).length !== 0){
                    if(!self.refs.registrationForm.refs.name.valid){
                      return self.refs.registrationForm.refs.name.validationErrors.join("\n");
                    }

                  }
                })(this)}
                validationFunction={[(value)=>{
                  /*
                  you can have multiple validators in a single function or an array of functions
                   */

                  if(value == '') return "Required";
                  //Initial state is null/undefined
                  if(!value) return true;
                  // Check if First Name Contains Numbers
                  var matches = value.match(/\d+/g);
                  if (matches != null) {
                      return "First Name can't contain numbers";
                  }

                  return true;
                }, (value)=>{
                  ///Initial state is null/undefined
                  if(!value) return true;
                  if(value.indexOf('4')!=-1){
                    return "I can't stand number 4";
                  }
                  return true;
                }]}
                />
              <InputField
                ref='email'
                placeholder='E-mail'
                keyboardType = 'email-address'
                helpText='this is an helpful text it can be also very very long and it will wrap'
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
              <Separator />
              <PickerField ref='sexo'
                label='Gender'
                options={{
                  "": '',
                  male: 'Male',
                  female: 'Female'
                }}/>
                <DatePickerField ref='cumpleanos'
                minimumDate={new Date('1/1/1900')}
                maximumDate={new Date()}
                placeholder='Birthday'
                mode="date"
                prettyPrint = "true"
                />
                <TimePickerField ref='hora'
              placeholder='Meeting Time'/>
                <Separator />
                <LinkField label="Please accept the Terms & Conditions" onPress={()=>{}}/>
                <SwitchField label='I accept Terms & Conditions'
                  ref="lopd"
                  helpText='Please read carefully the terms & conditions'/>

              </Form>
              <RoundedButton 
                text="Enviar"
                onPress={() => this.sendForm()}
              />
              <Text>{JSON.stringify(this.state.formData)}</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

//

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormularioScreen)
