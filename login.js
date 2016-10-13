'use strict';

var LoginSuccess = require('./LoginSuccess.js');
var Register = require('./registrar.js');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFPT2GBmhaXlxnI_B7u-3-Bk9I-2CXyvU",
  authDomain: "willisproject-cbd8a.firebaseapp.com",
  databaseURL: "https://willisproject-cbd8a.firebaseio.com/",
  storageBucket: "willisproject-cbd8a.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig, "Secondary");

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login(){
    this.setState({
      loading: true
    });
    // Log in and display an alert to tell the user what happened.
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then((userData) =>
      {
        this.setState({
	        loading: false
	      });
        this.props.navigator.push({
          component: LoginSuccess
        });
      }
    ).catch((error) =>
    	{
	      this.setState({
	        loading: false
	      });
        alert('Login Failed. Please try again' + error.message);
    });
  }

  onSearchTextChanged(event) {
    this.setState({username: event.nativeEvent.text});
  }

  // pushNavigation() {
  //   this.props.navigator.push({
  //     component: LoginSuccess
  //   });
  // }

  pushNavigationRegister() {
    this.props.navigator.push({
      component: Register
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./react-logo.png')} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={this.state.email}
          onChangeText={(text)=> this.setState({email: text})} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text)=> this.setState({password: text})}
          value={this.state.password}>
        </TextInput>

        <TouchableHighlight
          onPress={this.pushNavigationRegister.bind(this)}
          style={styles.button}
          underlayColor={"#E8E8E8"}
          >
          <Text style={styles.buttonText}>
            Registrar
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.login.bind(this)}
          style={styles.button}
          underlayColor={"#E8E8E8"}
          >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  navigationContainer: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  heading: {
    fontSize: 24,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  image: {
    width: 140,
    height: 140
  }
});

module.exports = Login;
