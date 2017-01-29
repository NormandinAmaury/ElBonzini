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

import AddBabyFootScene from '../scenes/addBabyFootScene';
import { connect } from 'react-redux';
import * as babyFootActions from '../../../actions/babyFootActions';

class AddBabyFootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      error: true,
      errorMessage: '',
    };
  }

  render() {
    return (
      <AddBabyFootScene
        name={this.state.name}
        onCloseModal={this.props.onCloseModal}
        addBabyFoot={this.addBabyFoot.bind(this)}
        updateName={this.updateName.bind(this)}
        error={this.state.error}
        errorMessage={this.state.errorMessage}
      />
    );
  }

  addBabyFoot() {
    const babyFoot = {
      name: this.state.name
    };
    if (!this.state.error) {
      this.props.createBabyFoot(babyFoot);
      this.props.onCloseModal();
    }
  }

  updateName(name) {
    this.setState({name: name});
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
    createBabyFoot: (babyFoot) => dispatch(babyFootActions.createBabyFoot(babyFoot)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBabyFootContainer);