/**
 * Created by Margot on 29/01/2017.
 */
/**
 * Created by Margot on 19/12/2016.
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
} from 'react-native';

import EditBabyFootScene from '../scenes/editBabyFootScene';
import { connect } from 'react-redux';
import * as babyFootActions from '../../../actions/babyFootActions';

class EditBabyFootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      error: true,
      errorMessage: '',
      babyFootEditedName: this.props.babyFootEdited.name
    };
  }

  render() {
    return (
     <EditBabyFootScene
      onCloseEditModal={this.props.onCloseEditModal}
      editBabyFoot={this.editBabyFoot.bind(this)}
      updateName={this.updateName.bind(this)}
      error={this.state.error}
      errorMessage={this.state.errorMessage}
      babyFootEditedName={this.state.babyFootEditedName}
     />
    );
  }

  editBabyFoot() {
    const babyFoot = {
      name: this.state.babyFootEditedName
    };
    if (!this.state.error) {
      this.props.editBabyFoot(babyFoot, this.props.babyFootEdited._id);
      this.props.onCloseEditModal();
    }
  }

  updateName(name) {
    this.setState({babyFootEditedName: name});
    if (name.length > 2) {
      this.setState({error: false});
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    babyFootObj: state.babyFootObj,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editBabyFoot: (babyFoot, id) => dispatch(babyFootActions.editBabyFoot(babyFoot, id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBabyFootContainer);