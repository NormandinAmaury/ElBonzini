/**
 * Created by Margot on 14/12/2016.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  AppState,
} from 'react-native';

import Route from './route';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class Client extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
      <Route
      />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Client', () => Client);
