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
  ScrollView,
} from 'react-native';

import ErrorMessage from '../../../components/componentsHelper/errorMessage';
import Style from '../../../../src/assets/styles/styles';
import { FormLabel, FormInput, Button } from 'react-native-elements'

const SignUpScene = function(props) {
  return (
      <ScrollView style={Style.scrollViewSignup}>
        <FormLabel labelStyle={{color: '#007F83'}}>First Name</FormLabel>
        <FormInput onChangeText={props.updateFirstName}
                   value={props.firstName}
        />
        <FormLabel labelStyle={{color: '#007F83'}}>Last Name</FormLabel>
        <FormInput onChangeText={props.updateLastName}
                   value={props.lastName}
        />
        <FormLabel labelStyle={{color: '#007F83'}}>Username</FormLabel>
        <FormInput onChangeText={props.updateUsername}
                   value={props.username}
        />
        <FormLabel labelStyle={{color: '#007F83'}}>French Department</FormLabel>
        <FormInput onChangeText={props.updateFrenchDepartment}
                   value={props.frenchDepartment}
                   keyboardType='numeric'
        />
        <FormLabel labelStyle={{color: '#007F83'}}>Email Address</FormLabel>
        <FormInput onChangeText={props.updateEmail}
                   keyboardType='email-address'
                   value={props.emailAddress}
        />
        <FormLabel labelStyle={{color: '#007F83'}}>Password</FormLabel>
        <FormInput onChangeText={props.updatePassword}
                   secureTextEntry={true}
                   value={props.password}
        />
        <FormLabel labelStyle={{color: '#007F83'}}>Confirm Password</FormLabel>
        <FormInput onChangeText={props.checkPassword}
                   secureTextEntry={true}
                   value={props.confirmPassword}
        />
        <Text></Text>
        <Button
          small
          icon={{name: 'check', type: 'evilicon', color:'white'}}
          title='CONFIRM'
          color='white'
          backgroundColor='#007F83'
          borderRadius={10}
          buttonStyle={{width:250, justifyContent:'center'}}
          onPress={props.register}
        />
        <ErrorMessage errorMessage={props.errorMessage} error={props.error} />
      </ScrollView>
  );
};

export default SignUpScene;
