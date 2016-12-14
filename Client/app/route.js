'use strict';

import React, {Component} from 'react';
import {
  Text,
  AppRegistry,
  View,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  Platform,
  NavigatorIOS,
} from 'react-native';

import Style from '../src/assets/styles/styles';
import NavigationBar from './components/navigationBar';
import SplashScene  from './splash/splashScene';
import OpenIntroContainer from './openInto/containers/openIntroContainer';

export default class Route extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <NavigatorIOS
          ref='nav'
          style={{flex: 1}}
          initialRoute={{
            title: 'SplashScreen',
            navigationBarHidden: true,
            component: SplashScene
          }}/>
      );
    } else {
      return (<Navigator
          ref='nav'
          initialRoute={{
            title: 'SplashScreen',
            component: SplashScene,
            display: false
          }}
          renderScene={(route, navigator) =>
            <route.component {...route.passProps} navigator={navigator}/>}
          navigationBar={<NavigationBar
            style={Style.navigationBar}
            routeMapper={NavigationBarRouteMapper}
          />}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}/>
      );
    }
  }
};

var NavigationBarRouteMapper = {
  // TODO beau chevron
  LeftButton(route, navigator, index, navState) {
    console.log(route.title);
    if (route.title === 'OpenIntroContainer') {
      return null;
    } else {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Icon name="md-arrow-back" size={20}/>
        </TouchableHighlight>
      );
    }
  },
  RightButton(route, navigator, index, navState) {
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={Style.navigationBarText}>
          {route.title}
        </Text>
      </TouchableOpacity>
    );
  }
};

