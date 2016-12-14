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
import TextField from '../../../node_modules/react-native-md-textinput';
import ErrorMessage from '../../components/errorMessage';

const LoginScene = function (props) {
  return (
    <View style={Style.loginContainer}>
      <ScrollView style={Style.scrollViewLogin}>
        <TextField
          highlightColor={props.borderColorEmail}
          label="Email Address"
          keyboardType='email-address'
          onChangeText={props.updateEmail }
          value={props.emailAddress}
          dense={true}
        />
        <TextField
          highlightColor={props.borderColorPassword}
          label="Password"
          onChangeText={props.updatePassword }
          maxLength={16}
          dense={true}
          value={props.password}
          secureTextEntry={true}/>
        <TouchableHighlight
          style={Style.loginButton}
          onPress={props.login}>
          <Text style={Style.loginText}>LOG IN</Text>
        </TouchableHighlight>
        <ErrorMessage errorMessage={props.errorMessage} error={props.error}/>
      </ScrollView>
    </View>
  );
};
export default LoginScene;

