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

import LoginContainer from '../../login/containers/loginContainer';
import SignupContainer from '../../signup/containers/signupContainer';
import OpenIntroScene from '../scenes/openIntroScene';

export default class OpenIntroContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OpenIntroScene
      gotoLogin={this.gotoLogin.bind(this)}
      gotoSignUp={this.gotoSignUp.bind(this)}
      />
    );
  }

  gotoLogin() {
    this.props.navigator.push({
      title: "LOG IN",
      component: LoginContainer,
      navigationBarHidden: false,
      display: true,
    });
  }

  gotoSignUp() {
    this.props.navigator.push({
      title: "SIGN UP",
      component: SignupContainer,
      navigationBarHidden: false,
      display: true,
    });
  }

}