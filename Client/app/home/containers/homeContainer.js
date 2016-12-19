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

import HomeScene from '../scenes/homeScene';
import LocalStorage from '../../helpers/localStorageHelper';
import Api from '../../helpers/apiHelper';


export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      name:'',
      babyfoot:[]
    };
  }

  componentWillMount() {
    Api.getAllBabyfoot()
      .then(response => {
        console.log(response);
        if(response.success) {
          response.babyfootArray.map((babyfoot) => {
            babyfoot.babyfootPic =
              require('../../../src/assets/images/babyfoot.jpeg');
          });
          console.log(response.babyfootArray);
          this.setState({
            babyfoot: response.babyfootArray
          });
          console.log(this.state.babyfoot);
        }
      })
      .catch(err => {
        console.log('error getting baby foot');
      })
  }

  render() {
    return (
      <HomeScene
        babyfoot={this.state.babyfoot}
        modalVisible={this.state.modalVisible}
        onCloseModal={this.onCloseModal.bind(this)}
        onOpenModal={this.onOpenModal.bind(this)}
      />
    );
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible});
  }

  onCloseModal () {
    this.setModalVisible(!this.state.modalVisible);
  }

  onOpenModal() {
    this.setModalVisible(true);
  }
}