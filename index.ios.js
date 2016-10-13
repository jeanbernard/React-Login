'use strict'

var Login = require('./login');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

class NavigationController extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigationContainer}
        initialRoute= {{
          title: 'Willis Login',
          titleTextColor: '#FFFFFF',
          barTintColor: '#48BBEC',
          component: Login,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1
  },
});

AppRegistry.registerComponent('WillisProject', () => NavigationController);
