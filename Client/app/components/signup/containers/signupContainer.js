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

import SignUpScene from '../scenes/signupScene';
import HomeContainer from '../../home/homeContainer';

import {connect} from 'react-redux';
import * as userActions from '../../../actions/userActions';

class SignUpSceneContainer extends Component {
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
      errorMessage: '',
      errorMessageDepartment: '',
      error: true,
      errorDepartment: false,
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
      error={this.state.error}
      errorMessage={this.state.errorMessage}
      errorDepartment={this.state.errorDepartment}
      errorMessageDepartment={this.state.errorMessageDepartment}
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
      if (this.checkInput()) {
        this.setState({error: false});
      }
    } else {
      this.setState({error: true})
    }
  }

  updateLastName(lastName) {
    this.setState({lastName: lastName});
    if (lastName.length > 2 && lastName !== '') {
      if (this.checkInput()) {
        this.setState({error: false})
      }
    } else {
      this.setState({error: true})
    }
  }

  updateUsername(username) {
    this.setState({username: username});
    if (username.length > 2 && username !== '') {
      if (this.checkInput()) {
        this.setState({error: false});
      }
    } else {
      this.setState({error: true})
    }
  }

  updateFrenchDepartment(frenchDepartment) {
    this.setState({frenchDepartment: frenchDepartment});
    if (frenchDepartment.length > 2 && frenchDepartment !== '') {
      if (this.checkInput() && Number.isInteger(frenchDepartment)) {
        this.setState({error: false, errorDepartment: false});
      }
    } else if (isNaN(frenchDepartment)) {
      this.setState({errorDepartment: true})
    } else {
      this.setState({error: true, errorDepartment: false})
    }
  }

  updateEmail(emailAddress) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({emailAddress: emailAddress});
    if (re.test(emailAddress) && emailAddress !== '') {
      if (this.checkInput()) {
        this.setState({error: false})
      }
    } else {
      this.setState({error: true})
    }

  }

  updatePassword(password) {
    this.setState({password: password});
    if (password.length > 3 && password !== '') {
      if (this.checkInput()) {
        this.setState({error: false});
      }
    } else {
      this.setState({error: true})
    }

  }

  checkPassword(confirmPassword) {
    this.setState({confirmPassword: confirmPassword});
    if ((this.state.password === confirmPassword)) {
      if (this.checkInput()) {
        this.setState({error: false})
      }
    } else {
      this.setState({error: true})
    }
  }


  register() {
    if (!this.state.error && !this.state.errorDepartment) {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        frenchDepartment: this.state.frenchDepartment,
        emailAddress: this.state.emailAddress,
        password: this.state.password,
      };
      this.props.createUser(user)
       .then(() => {
        if(this.props.userObj.error === null) {
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
            error: true,
            errorMessage: this.props.userObj.error
          });
        }
       })
       .catch(err => {
         this.setState({
           error: true,
           errorMessage: err
         });
       });
    } else if (this.state.errorDepartment) {
      this.setState({
        errorDepartment: true,
        errorMessageDepartment: 'Please to enter a valid french department'
      })
    } else {
      this.setState({
        error: true,
        errorMessage: 'Please to fill in properly the fields'
      });
    }

  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    userObj: state.userObj,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(userActions.createUser(user)),
    login: user => dispatch(userActions.login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(
 SignUpSceneContainer);