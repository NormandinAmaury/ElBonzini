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

import BabyFootListScene from '../scenes/babyFootListScene';
import {connect} from 'react-redux';
import * as babyFootActions from '../../../actions/babyFootActions';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    this.props.getAllBabyFoot();
    return (
     <BabyFootListScene
      babyFoot={this.props.babyFootObj}
      modalVisible={this.state.modalVisible}
      onCloseModal={this.onCloseModal.bind(this)}
      onOpenModal={this.onOpenModal.bind(this)}
     />
    );
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onCloseModal() {
    this.setModalVisible(!this.state.modalVisible);
  }

  onOpenModal() {
    this.setModalVisible(true);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    babyFootObj: state.babyFootObj,
    userObj: state.userObj
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBabyFoot: () => dispatch(babyFootActions.getAllBabyFoot())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);