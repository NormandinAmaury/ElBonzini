/**
 * Created by Margot on 23/01/2017.
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  Alert
} from 'react-native';

import OpenIntroContainer from '../../openInto/containers/openIntroContainer';
import ProfileScene from '../scenes/profileScene';
import {connect} from 'react-redux';
import * as userActions from '../../../actions/userActions';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    return (
     <ProfileScene
      user={this.props.userObj.user}
      logout={this.logout.bind(this)}
      alertDelete={this.alertDelete.bind(this)}
     />
    );
  }

  logout() {
    this.props.logout();
    this.props.navigator.replace({
      title: 'OpenIntroContainer',
      component: OpenIntroContainer,
      navigationBarHidden: true,
      display: false
    })
  }

  alertDelete() {
    Alert.alert('Delete your account', 'Are you sure ?',
     [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
       {text: 'Delete', onPress: () => this.deleteUser()},
     ]
    )
  }

  deleteUser() {
    this.props.deleteUser();
    this.props.navigator.replace({
      title: 'OpenIntroContainer',
      component: OpenIntroContainer,
      navigationBarHidden: true,
      display: false
    })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userObj: state.userObj,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(userActions.logout()),
    getUser: () => dispatch(userActions.getUser()),
    deleteUser: () => dispatch(userActions.deleteUser()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);