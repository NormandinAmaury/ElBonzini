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
import LocalStorage from '../../helpers/localStorageHelper';
import Api from '../../helpers/apiHelper';

export default class AddBabyFootContainer extends Component {
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
      Api.addBabyFoot(babyFoot)
        .then(response => {
          if (response.success) {
            console.log("Baby foot created");
            LocalStorage.saveBabyFoot(response.data);
            //this.props.babyfoot.push(response.data);
            this.props.onCloseModal();
          }
        })
        .catch(err => console.log("Error in baby foot creation : " + err))
    }

  }

  updateName(name) {
    this.setState({name: name});
    if (name.length > 2) {
        this.setState({error: false});
    }
  }
}