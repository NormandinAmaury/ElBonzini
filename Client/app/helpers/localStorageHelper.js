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
import Api from './apiHelper';

const LocalStorage = {

  onValueChange(item, token) {
    AsyncStorage.setItem(item, token)
      .then(console.log('Set token success'))
      .catch(err => console.log('token error: ' + err.message));
    Api.setHeaderInfo(token);
  },

  getToken() {
    return new Promise((resolve, reject) => {
      return AsyncStorage.getItem(Constant.STORAGE_KEY)
        .then(token => {
          if (token) {
            console.log("token ok");
            Api.setHeaderInfo(token);
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

  saveUser(userData) {
    AsyncStorage.setItem('userData', JSON.stringify(userData))
      .then(console.log('user data saved successfully'))
      .catch(err => console.log('user data saving error: ' + err.message));
  },

  removeUser() {
    AsyncStorage.removeItem('userData')
      .then(console.log('user data removed'))
      .catch(err => console.log(console.log('error removing user ' + err.message)))
  },

  getUser() {
    return new Promise((resolve, reject) => {
      return AsyncStorage.getItem('userData')
        .then(userData => resolve(JSON.parse(userData)))
        .catch(err => console.log("error getting user data: " + err.message));
    })
  },

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      return this.getToken()
        .then(token => {
          console.log('user is logged in with token: ' + token);
          console.log(Api.isLoggedIn);
          resolve(Api.isLoggedIn);
        })
        .catch(() => {
          console.log('no token found ');
          reject();
        });
    })
  },

  wipeMemory() {
    return new Promise((resolve, reject) => {
      this.removeToken();
      this.removeUser();
      this.removeBabyFoot();
      resolve();
    });
  },

  saveBabyFoot(babyFootData) {
    AsyncStorage.setItem('babyFoot', JSON.stringify(babyFootData))
      .then(console.log('babyFoot saved successfully'))
      .catch(err => console.log('babyFoot saving error: ' + err.message));
  },

  removeBabyFoot() {
    AsyncStorage.removeItem('babyFoot')
      .then(console.log('babyfoot removed'))
      .catch(err => console.log(console.log('error removing babyfoot ' + err.message)))
  },
};

export default LocalStorage;