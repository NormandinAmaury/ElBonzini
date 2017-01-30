/**
 * Created by Margot on 14/12/2016.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform
} from 'react-native';

const Constant = {
  apiUrl : 'http://192.168.1.13:8000/api', // for Android
  // apiUrl : 'http://127.0.0.1:8000/api', //local for iOs
  STORAGE_KEY : 'id_token',
};

export default Constant;