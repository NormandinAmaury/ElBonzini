/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  AppRegistry,
  View,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Style from '../../../src/assets/styles/styles';


const OpenIntroScene = function (props) {
  return (
    <View style={Style.introContainer}>
      <TouchableHighlight
        style={Style.loginButton}
        onPress={props.gotoLogin}>
        <Text style={Style.loginText}>LOG IN </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={Style.signUpButton}
        onPress={props.gotoSignUp}>
        <Text style={Style.signUpText}>SIGN UP</Text>
      </TouchableHighlight>
    </View>
  );
};
export default OpenIntroScene;
