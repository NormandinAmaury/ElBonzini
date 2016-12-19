/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  AppRegistry,
  View,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {Button} from 'react-native-elements'

import Style from '../../../src/assets/styles/styles';


const OpenIntroScene = function (props) {
  return (
    <View style={Style.introContainer}>
      <Button
        large
        icon={{name: 'unlock', type: 'evilicon', color:'#007F83'}}
        title='LOG IN'
        color='#007F83'
        backgroundColor='white'
        borderRadius={10}
        buttonStyle={{width:250}}
        onPress={props.gotoLogin}
      />
      <Text></Text>
      <Button
        large
        icon={{name: 'pencil', type: 'evilicon', color:'#007F83'}}
        title='SIGN UP'
        color='#007F83'
        backgroundColor='white'
        borderRadius={10}
        buttonStyle={{width:250}}
        onPress={props.gotoSignUp}
      />
    </View>
  );
};
export default OpenIntroScene;
