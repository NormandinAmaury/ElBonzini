/**
 * Created by Margot on 14/12/2016.
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
} from 'react-native';

import Style from '../../../src/assets/styles/styles';
import OpenIntroContainer from '../openInto/containers/openIntroContainer';
import HomeContainer from '../home/homeContainer';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class SplashScene extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.isLogin();
      if (this.props.auth) {
        this.goToHomeScene();
      } else {
        this.goToIntroScene()
      }
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

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLogin: () => dispatch(authActions.isLogin()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScene);