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

export default class NavigationBar extends Navigator.NavigationBar {

  render() {
    var routes = this.props.navState.routeStack;

    if (routes.length) {
      var route = routes[routes.length - 1];

      if (route.display === false) {
        return null;
      }
    }

    return super.render();
  }
}