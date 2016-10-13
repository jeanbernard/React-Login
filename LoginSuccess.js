import React, { Component } from 'react';
import { AppRegistry, Text, Image, StyleSheet, View } from 'react-native';

class LoginSuccess extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./react-logo.png')} style={styles.image} />
        <Text style={styles.welcome}>
          Entraste!! :]
        </Text>
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
  }, image: {
      width: 140,
      height: 140
    },  welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
});

module.exports = LoginSuccess;
