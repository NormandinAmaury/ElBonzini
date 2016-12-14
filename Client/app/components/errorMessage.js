/**
 * Created by Margot on 14/12/2016.
 */
import React, { Component } from 'react';
import {
  Text,
  AppRegistry,
  View,
  Navigator,
} from 'react-native';

export default class ErrorMessage extends Component {
  render() {
    if (this.props.error) {
      return(<Text>{this.props.errorMessage}</Text>)
    } else {
      return null;
    }
  }
}