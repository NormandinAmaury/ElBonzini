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
import Api from '../../../helpers/apiHelper';
import LocalStorage from '../../../helpers/localStorageHelper';
import Constant from '../../../../src/assets/constants/constant';
import HomeContainer from '../../home/homeContainer';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/userActions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
      errorMessage: '',
      error: false,
    };
  }

  render() {
    return (
      <LoginScene
        emailAddress={this.state.emailAddress}
        password={this.state.password}
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
      if (this.state.password !== '') {
        this.setState({error: false})
      }
    } else {
      this.setState({error: true})
    }
  }

  updatePassword(password) {
    this.setState({password});
    if (password.length > 3 && password !== '') {
      if (this.state.emailAddress !== '') {
        this.setState({error: false});
      }
    } else {
      this.setState({error: true})
    }
  }

  login() {
    if (!this.state.error) {
      const user = {
        emailAddress: this.state.emailAddress,
        password: this.state.password,
      };
      this.props.login(user)
        .then(() => {
          this.props.navigator.push({
            title: 'Home',
            component: HomeContainer,
            navigationBarHidden: true,
            display: false
          });
        })
        .catch(err => {
          this.setState({
            error: true,
            errorMessage: err
          });
        });
    } else {
      this.setState({
        errorMessage: 'Please fill in the fields'
      });
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialState: state.initialState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(userActions.login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);