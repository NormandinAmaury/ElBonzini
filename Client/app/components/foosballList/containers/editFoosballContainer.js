/**
 * Created by Margot on 29/01/2017.
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
} from 'react-native';

import EditFoosballScene from '../scenes/editFoosballScene';
import { connect } from 'react-redux';
import * as foosballActions from '../../../actions/foosballActions';

class EditFoosballContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      error: true,
      errorMessage: '',
      foosballEditedName: this.props.foosballEdited.name
    };
  }

  render() {
    return (
     <EditFoosballScene
      onCloseEditModal={this.props.onCloseEditModal}
      editFoosball={this.editFoosball.bind(this)}
      updateName={this.updateName.bind(this)}
      error={this.state.error}
      errorMessage={this.state.errorMessage}
      foosballEditedName={this.state.foosballEditedName}
     />
    );
  }

  editFoosball() {
    const foosball = {
      name: this.state.foosballEditedName
    };
    if (!this.state.error) {
      this.props.editFoosball(foosball, this.props.foosballEdited._id);
      this.props.onCloseEditModal();
    }
  }

  updateName(name) {
    this.setState({foosballEditedName: name});
    if (name.length > 2) {
      this.setState({error: false});
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    foosballObj: state.foosballObj,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editFoosball: (foosball, id) => dispatch(foosballActions.editFoosball(foosball, id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFoosballContainer);