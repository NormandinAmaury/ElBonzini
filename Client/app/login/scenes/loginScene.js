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
import ErrorMessage from '../../components/errorMessage';
import { FormLabel, FormInput, Button } from 'react-native-elements'


const LoginScene = function (props) {
  return (
      <ScrollView style={Style.scrollViewLogin}>
        <FormLabel labelStyle={{color: '#007F83'}}>Email Address</FormLabel>
        <FormInput onChangeText={props.updateEmail}
                   value={props.emailAddress}
                   keyboardType='email-address'
        />
        <FormLabel labelStyle={{color: '#007F83'}}>Password</FormLabel>
        <FormInput onChangeText={props.updatePassword}
                   value={props.password}
                   secureTextEntry={true}
        />
        <Text></Text>
        <Button
          small
          icon={{name: 'check', type: 'evilicon', color:'white'}}
          title='LOG IN'
          color='white'
          backgroundColor='#007F83'
          borderRadius={10}
          buttonStyle={{width:250, textAlign:'center'}}
          onPress={props.login}
        />
        <ErrorMessage errorMessage={props.errorMessage} error={props.error}/>
      </ScrollView>
  );
};
export default LoginScene;

