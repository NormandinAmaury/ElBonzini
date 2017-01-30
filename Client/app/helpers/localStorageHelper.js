/**
 * Created by Margot on 14/12/2016.
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import Promise from 'bluebird';
import Constant from '../../src/assets/constants/constant';

const LocalStorage = {

  onValueChange(item, token) {
    AsyncStorage.setItem(item, token)
      .then(console.log('Set token success'))
      .catch(err => console.log('token error: ' + err.message));
  },

  getToken() {
    return new Promise((resolve, reject) => {
      return AsyncStorage.getItem(Constant.STORAGE_KEY)
        .then(token => {
          if (token) {
            resolve(token);
          } else {
            reject();
          }
        })
        .catch(err => console.log('error getting token ' + err.message));
    })
  },

  removeToken() {
    AsyncStorage.removeItem(Constant.STORAGE_KEY)
      .then(console.log('token removed'))
      .catch(err =>console.log('AsyncStorage error: ' + err.message));
  },
};

export default LocalStorage;