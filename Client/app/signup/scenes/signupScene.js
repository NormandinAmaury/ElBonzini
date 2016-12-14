/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  TextInput,
  AppRegistry,
  View,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import TextField from '../../../node_modules/react-native-md-textinput';
import ErrorMessage from '../../components/errorMessage';
import Style from '../../../src/assets/styles/styles';

const SignUpScene = function(props) {
  return (
    <View style={Style.loginContainer}>
      <ScrollView style={Style.scrollViewSignup}>
        <TextField
          label="First Name"
          highlightColor={props.borderColorFirstName}
          //style={{height: 40, borderColor:props.borderColorFirstName, borderWidth: 1}}
          //placeholder={I18n.t('name')}
          onChangeText={props.updateFirstName}
          value={props.firstName}
          dense={true}
        />
        <TextField
          label="Last Name"
          highlightColor={props.borderColorFirstName}
          //style={{height: 40, borderColor:props.borderColorFirstName, borderWidth: 1}}
          //placeholder={I18n.t('name')}
          onChangeText={props.updateLastName}
          value={props.lastName}
          dense={true}
        />
        <TextField
          label="Username"
          highlightColor={props.borderColorUsername}
          //style={{height: 40, borderColor:props.borderColorFirstName, borderWidth: 1}}
          //placeholder={I18n.t('name')}
          onChangeText={props.updateUsername}
          value={props.username}
          dense={true}
        />
        <TextField
          label="French Department"
          highlightColor={props.borderColorFrenchDepartment}
          //style={{height: 40, borderColor:props.borderColorFirstName, borderWidth: 1}}
          //placeholder={I18n.t('name')}
          onChangeText={props.updateFrenchDepartment}
          value={props.frenchDepartment}
          dense={true}
        />
        <TextField
          //style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          //placeholder={I18n.t('email')}
          highlightColor={props.borderColorEmail}
          label="Email address"
          keyboardType='email-address'
          onChangeText={props.updateEmail}
          value={props.emailAddress}
          dense={true}
        />
        <TextField
          //style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          //placeholder={I18n.t('password')}
          highlightColor={props.borderColorPassword}
          label="Password"
          secureTextEntry={true}
          maxLength={16}
          onChangeText={props.updatePassword}
          value={props.password}
          dense={true}
        />
        <TextField
          //style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          //placeholder={I18n.t('confirmPassword')}
          highlightColor={props.borderColorConfirmPassword}
          label="Confirm password"
          secureTextEntry={true}
          maxLength={16}
          onChangeText={props.checkPassword}
          value={props.confirmPassword}
          dense={true}
        />
        <TouchableHighlight
          style={Style.loginButton}
          onPress={props.register}>
          <Text style={Style.loginText}>CONFIRM</Text>
        </TouchableHighlight>
        <ErrorMessage errorMessage={props.errorMessage} error={props.error} />
      </ScrollView>
    </View>
  );
};

export default SignUpScene;
