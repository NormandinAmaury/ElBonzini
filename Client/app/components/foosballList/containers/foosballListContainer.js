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

import FoosballListScene from '../scenes/foosballListScene';
import {connect} from 'react-redux';
import * as foosballActions from '../../../actions/foosballActions';
import * as userActions from '../../../actions/userActions';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      editModalVisible: false,
      foosballEdited: {}
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {
    this.props.getAllFoosball();
    return (
     <FoosballListScene
      foosball={this.props.foosballObj}
      modalVisible={this.state.modalVisible}
      editModalVisible={this.state.editModalVisible}
      onCloseModal={this.onCloseModal.bind(this)}
      onOpenModal={this.onOpenModal.bind(this)}
      onCloseEditModal={this.onCloseEditModal.bind(this)}
      onOpenEditModal={this.onOpenEditModal.bind(this)}
      alertDelete={this.alertDelete.bind(this)}
      foosballEdited={this.state.foosballEdited}
     />
    );
  }

  alertDelete(foosball, index) {
    Alert.alert('Delete a foosball', 'Are you sure ?',
     [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
       {text: 'Delete', onPress: () => this.deleteFoosball(foosball._id, index)},
     ]
    )
  }

  deleteFoosball(foosballId, index) {
    this.props.deleteFoosball(foosballId, index);
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

  onOpenEditModal(foosball) {
    this.setState({foosballEdited: foosball});
    this.setEditModalVisible(true);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    foosballObj: state.foosballObj,
    userObj: state.userObj
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllFoosball: () => dispatch(foosballActions.getAllFoosball()),
    deleteFoosball: (id, index) => dispatch(foosballActions.deleteFoosball(id, index)),
    getUser: () => dispatch(userActions.getUser()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);