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

var authToken = '';

const Api = {

  isLoggedIn: false,

  setHeaderInfo (token) {
    this.isLoggedIn = true;
    authToken = token;
  },


  signUp(user) {
    return new Promise((resolve, reject) => {
      return fetch(Constant.apiUrl + '/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(responseJson => resolve(responseJson))
        .catch(err => {
          throw {
            message: 'Error in sign up',
            error: err
          };
        })
    });
  },

  login(user) {
    return new Promise((resolve, reject) => {
      return fetch(Constant.apiUrl + '/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(responseJson => resolve(responseJson))
        .catch(err => {
          throw {
            message: 'Error in login',
            error: err
          };
        });
    })
  },

};

export default Api;