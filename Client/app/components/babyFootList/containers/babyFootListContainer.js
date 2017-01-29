/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  Alert
} from 'react-native';

import BabyFootListScene from '../scenes/babyFootListScene';
import {connect} from 'react-redux';
import * as babyFootActions from '../../../actions/babyFootActions';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      editModalVisible: false,
      babyFootEdited: {}
    };
  }

  render() {
    this.props.getAllBabyFoot();
    return (
     <BabyFootListScene
      babyFoot={this.props.babyFootObj}
      modalVisible={this.state.modalVisible}
      editModalVisible={this.state.editModalVisible}
      onCloseModal={this.onCloseModal.bind(this)}
      onOpenModal={this.onOpenModal.bind(this)}
      onCloseEditModal={this.onCloseEditModal.bind(this)}
      onOpenEditModal={this.onOpenEditModal.bind(this)}
      alertDelete={this.alertDelete.bind(this)}
      babyFootEdited={this.state.babyFootEdited}
     />
    );
  }

  alertDelete(babyFoot, index) {
    Alert.alert('Delete a foosball', 'Are you sure ?',
     [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
       {text: 'Delete', onPress: () => this.deleteBabyFoot(babyFoot._id, index)},
     ]
    )
  }

  deleteBabyFoot(babyFootId, index) {
    this.props.deleteBabyFoot(babyFootId, index);
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

  setEditModalVisible(visible) {
    this.setState({editModalVisible: visible});
  }

  onCloseEditModal() {
    this.setEditModalVisible(!this.state.editModalVisible);
  }

  onOpenEditModal(bf) {
    this.setState({babyFootEdited: bf});
    this.setEditModalVisible(true);
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
    getAllBabyFoot: () => dispatch(babyFootActions.getAllBabyFoot()),
    deleteBabyFoot: (id, index) => dispatch(babyFootActions.deleteBabyFoot(id, index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);