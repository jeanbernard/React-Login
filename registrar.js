import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFPT2GBmhaXlxnI_B7u-3-Bk9I-2CXyvU",
  authDomain: "willisproject-cbd8a.firebaseapp.com",
  databaseURL: "https://willisproject-cbd8a.firebaseio.com/",
  storageBucket: "willisproject-cbd8a.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const rootRef = firebaseApp.database().ref();

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: ''
    };
  }

  signup() {
   this.setState({
     // When waiting for the firebase server show the loading indicator.
     loading: true
   });

   // Make a call to firebase to create a new user.
   firebaseApp.auth().createUserWithEmailAndPassword(
     this.state.email,
     this.state.password).then(() => {
       // then and catch are methods that we call on the Promise returned from
       // createUserWithEmailAndPassword
       alert('Your account was created!');
       this.setState({
         // Clear out the fields when the user logs in and hide the progress indicator.
         email: '',
         password: '',
         loading: false
       });
       this.props.navigator.push({
         component: Login
       });
   }).catch((error) => {
     // Leave the fields filled when an error occurs and hide the progress indicator.
     this.setState({
       loading: false
     });
     alert("Account creation failed: " + error.message );
   });
 }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./react-logo.png')} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={(text)=> this.setState({email: text})}
          value={this.state.email} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text)=> this.setState({password: text})}
          value={this.state.password}>
        </TextInput>

        <TouchableHighlight
          onPress={this.signup.bind(this)}
          style={styles.button}
          underlayColor={"#E8E8E8"}
          >
          <Text style={styles.buttonText}>
            Registrar
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
    backgroundColor: '#48BBEC',
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
    borderColor: '#48bbec',
    backgroundColor: '#FFFFFF'
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

module.exports = Register;
