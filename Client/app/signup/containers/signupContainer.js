/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  TextInput,
  AppRegistry,
  View,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import SignUpScene from '../scenes/signupScene';
import HomeContainer from '../../home/containers/homeContainer';

import Api from '../../helpers/apiHelper';
import LocalStorage  from '../../helpers/localStorageHelper';
import Constant from '../../../src/assets/constants/constant';


export default class SignUpScene1Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      username: '',
      frenchDepartment: '',
      borderColorEmail: '#8e0000',
      borderColorPassword: '#8e0000',
      borderColorConfirmPassword: '#8e0000',
      borderColorFirstName: '#8e0000',
      borderColorLastName: '#8e0000',
      borderColorUsername: '#8e0000',
      borderColorState: '#8e0000',
      errorMessage:'',
      error: true,
    };
  }
  render() {
    return (
      <SignUpScene
        updateFirstName={this.updateFirstName.bind(this)}
        updateLastName={this.updateLastName.bind(this)}
        updateEmail={this.updateEmail.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        updateUsername={this.updateUsername.bind(this)}
        updateFrenchDepartment={this.updateFrenchDepartment.bind(this)}
        checkPassword={this.checkPassword.bind(this)}
        register={this.register.bind(this)}
        emailAddress={this.state.emailAddress}
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        username={this.state.username}
        frenchDepartment={this.state.frenchDepartment}
        borderColorEmail={this.state.borderColorEmail}
        borderColorPassword={this.state.borderColorPassword}
        borderColorConfirmPassword={this.state.borderColorConfirmPassword}
        borderColorFirstName={this.state.borderColorFirstName}
        borderColorLastName={this.state.borderColorLastName}
        borderColorUsername={this.state.borderColorUsername}
        borderColorFrenchDepartment={this.state.borderColorFrenchDepartment}
        error={this.state.error}
        errorMessage={this.state.errorMessage}

      />
    );
  }

  checkInput() {
    return (this.state.firstName !== '' && this.state.lastName !== ''
    && this.state.frenchDepartment !== '' && this.state.username !== ''
    && this.state.emailAddress !== '' && this.state.password !== ''
    && this.state.confirmPassword);
  }

  updateFirstName(firstName) {
    this.setState({firstName: firstName});
    if (firstName.length > 2 && firstName !== '') {
      this.setState({borderColorFirstName: '#1f8e6f'});
      if (this.checkInput()) {
        this.setState({error: false});
      }
    } else {
      this.setState({borderColorFirstName: '#8e0000', error: true})
    }
  }

  updateLastName(lastName) {
    this.setState({lastName: lastName});
    if (lastName.length > 2 && lastName !== '') {
      this.setState({borderColorLastName: '#1f8e6f'});
      if (this.checkInput()) {
        this.setState({error: false})
      }
    } else {
      this.setState({borderColorLastName: '#8e0000', error: true})
    }
  }

  updateUsername(username) {
    this.setState({username: username});
    if (username.length > 2 && username !== '') {
      this.setState({borderColorUsername: '#1f8e6f'});
      if (this.checkInput()) {
        this.setState({error: false});
      }
    } else {
      this.setState({borderColorUsername: '#8e0000', error: true})
    }
  }

  updateFrenchDepartment(frenchDepartment) {
    this.setState({state: frenchDepartment});
    if (frenchDepartment.length > 2 && frenchDepartment !== '') {
      this.setState({borderColorState: '#1f8e6f'});
      if (this.checkInput()) {
        this.setState({error: false});
      }
    } else {
      this.setState({borderColorState: '#8e0000', error: true})
    }
  }

  updateEmail(emailAddress) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({emailAddress: emailAddress});
    if (re.test(emailAddress) && emailAddress !== '') {
      this.setState({borderColorEmail: '#1f8e6f'});
      if (this.checkInput()) {
        this.setState({error: false})
      }
    } else {
      this.setState({borderColorEmail: '#8e0000', error: true})
    }

  }

  updatePassword(password) {
    this.setState({password: password});
    if (password.length > 3 && password !== '') {
      this.setState({borderColorPassword: '#1f8e6f'});
      if (this.checkInput()) {
        this.setState({ error: false});
      }
    } else {
      this.setState({borderColorPassword: '#8e0000', error: true})
    }

  }

  checkPassword(confirmPassword) {
    this.setState({confirmPassword: confirmPassword});
    if ((this.state.password === confirmPassword)) {
      this.setState({borderColorConfirmPassword: '#1f8e6f'});
      if (this.checkInput()) {
        this.setState({ error: false})
      }
    } else {
      this.setState({borderColorConfirmPassword: '#8e0000', error: true})
    }
  }


  register() {

    if (!this.state.error) {
      var user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username : this.state.username,
        frenchDepartment: this.state.frenchDepartment,
        emailAddress: this.state.emailAddress,
        password: this.state.password,
      };

      Api.signUp(user)
        .then(response => {
          if (response.success) {
            console.log("signup data: " + JSON.stringify(response));
            var loginUser = {
              emailAddress: user.emailAddress,
              password: user.password
            };
            return Api.login(loginUser);
          } else {
            this.setState({
              error: true,
              errorMessage: response.msg
            });
          }

        })
        .then(response => {
          if (response.success) {
            // var userData = response.userData;
            LocalStorage.onValueChange(Constant.STORAGE_KEY,
              response.token);
            LocalStorage.saveUser(response.userData);
            console.log("response " + JSON.stringify(response));
            this.props.navigator.push({
              title: "Home",
              component: HomeContainer,
              navigationBarHidden: true,
              display: false
            });
            console.log('props navigator')
          } else {
            this.setState({
              error: true,
              errorMessage: response.msg
            });
          }
        })
        .catch(resultErr => console.log("error register"));

    } else {
      this.setState({
        error: true,
        errorMessage: 'Veuillez remplir correctement les champs'
      });
    }
  };
}
