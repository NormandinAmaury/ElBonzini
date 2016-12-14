/**
 * Created by Margot on 14/12/2016.
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
} from 'react-native';

import Style from '../../src/assets/styles/styles';
import LocalStorage from '../helpers/localStorageHelper';
import OpenIntroContainer from '../openInto/containers/openIntroContainer';
import HomeContainer from '../home/containers/homeContainer';

export default class SplashScene extends Component {
  componentWillMount() {
    setTimeout(() => {
      LocalStorage.isLoggedIn()
        .then((login) => {
          if (login) {
            this.goToHomeScene();
          } else {
            this.goToIntroScene()
          }
        })
        .catch(() => {
        console.log("catch");
          this.goToIntroScene();
        })
    }, 2000);
  }

  goToHomeScene() {
    this.props.navigator.replace({
      title: 'Home',
      component: HomeContainer,
      navigationBarHidden: true,
      display: false,
    });
  }

  goToIntroScene() {
    this.props.navigator.replace({
      title: 'Welcome',
      component: OpenIntroContainer,
      navigationBarHidden: true,
      display: false,
    });
  }

  render() {
    return (
      <View style={Style.splashContainer}>
        <Text style={Style.splashLogo}>EL BONZINI</Text>
      </View>
    );
  }
}