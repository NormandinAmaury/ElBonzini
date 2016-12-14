/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, {Component} from 'react';
import {
  Text,
  TextInput,
  AppRegistry,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Style from '../../../src/assets/styles/styles';

const HomeScene = function (props) {
  return (
    <View style={Style.loginContainer}>
      <ScrollView style={Style.scrollViewLogin}>

      </ScrollView>
    </View>
  );
};
export default HomeScene;

