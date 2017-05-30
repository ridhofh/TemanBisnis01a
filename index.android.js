/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import IndexApp from './app/index';

export default class TemanBisnis extends Component {
  render() {
    return (
      <IndexApp/>
    );
  }
}


AppRegistry.registerComponent('TemanBisnis', () => TemanBisnis);
