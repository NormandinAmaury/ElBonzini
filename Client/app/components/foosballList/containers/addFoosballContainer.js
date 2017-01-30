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

import AddFoosballScene from '../scenes/addFoosballScene';
import { connect } from 'react-redux';
import * as foosballActions from '../../../actions/foosballActions';

class AddFoosballContainer extends Component {
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
      <AddFoosballScene
        name={this.state.name}
        onCloseModal={this.props.onCloseModal}
        addFoosball={this.addFoosball.bind(this)}
        updateName={this.updateName.bind(this)}
        error={this.state.error}
        errorMessage={this.state.errorMessage}
      />
    );
  }

  addFoosball() {
    const foosball = {
      name: this.state.name
    };
    if (!this.state.error) {
      this.props.createFoosball(foosball);
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
    foosballObj: state.foosballObj,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFoosball: (foosball) => dispatch(foosballActions.createFoosball(foosball)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFoosballContainer);