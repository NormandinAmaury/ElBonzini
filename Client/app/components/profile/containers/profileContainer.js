/**
 * Created by Margot on 23/01/2017.
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
} from 'react-native';

import OpenIntroContainer from '../../openInto/containers/openIntroContainer';
import ProfileScene from '../scenes/profileScene';
import {connect} from 'react-redux';
import * as userActions from '../../../actions/userActions';
import * as babyFootActions from '../../../actions/babyFootActions';

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
    // removeBabyFoot: () => dispatch(babyFootActions.removeBabyFoot())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);