/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
} from 'react-native';

import LoginScene from '../scenes/loginScene';
import Api from '../../helpers/apiHelper';
import LocalStorage from '../../helpers/localStorageHelper';
import Constant from '../../../src/assets/constants/constant';
import HomeContainer from '../../home/containers/homeContainer';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
      errorMessage: '',
      error: false,
      borderColorEmail: '#8e0000',
      borderColorPassword: '#8e0000'
    };
  }

  render() {
    return (
      <LoginScene
        emailAddress={this.state.emailAddress}
        password={this.state.password}
        borderColorEmail={this.state.borderColorEmail}
        borderColorPassword={this.state.borderColorPassword}
        updateEmail={this.updateEmail.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        login={this.login.bind(this)}
        error={this.state.error}
        errorMessage={this.state.errorMessage}
      />
    );
  }

  updateEmail(emailAddress) {
    var verifEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({emailAddress});
    if (verifEmail.test(emailAddress) && emailAddress !== '') {
      this.setState({borderColorEmail: '#1f8e6f'});
      if (this.state.password !== '') {
        this.setState({error: false})
      }
    } else {
      this.setState({borderColorEmail: '#8e0000', error: true})
    }
  }

  updatePassword(password) {
    this.setState({password});
    if (password.length > 3 && password !== '') {
      this.setState({borderColorPassword: '#1f8e6f'});
      if (this.state.emailAddress !== '') {
        this.setState({error: false});
      }
    } else {
      this.setState({borderColorPassword: '#8e0000', error: true})
    }
  }

  login() {
    console.log(this.state.error);
    if (!this.state.error) {
      const user = {
        emailAddress: this.state.emailAddress,
        password: this.state.password,
      };
      Api.login(user)
        .then(response => {
          if (response.success) {
            // var userData = response.userData;
            LocalStorage.onValueChange(Constant.STORAGE_KEY,
              response.token);
            LocalStorage.saveUser(response.userData);
            console.log("response " + JSON.stringify(response));
            console.log("success");
            this.props.navigator.push({
              title: 'Home',
              component: HomeContainer,
              navigationBarHidden: true,
              display: false
            })
          } else {
            console.log("response.success false");
            this.setState({
              error: true,
              errorMessage: response.msg
            });
          }
        })
        .catch(err => console.log("error api login" + err));
    } else {
      this.setState({
        errorMessage: 'Please fill in the fields'
      });
    }
  }
}