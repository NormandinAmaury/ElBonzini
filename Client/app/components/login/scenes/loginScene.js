/**
 * Created by Margot on 14/12/2016.
 */
'use strict';

import React, {Component} from 'react';
import {
  Text,
  AppRegistry,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Style from '../../../../src/assets/styles/styles';
import ErrorMessage from '../../../components/componentsHelper/errorMessage';
import {FormLabel, FormInput, Button} from 'react-native-elements'


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
     <Text>{'\n\n\n'}</Text>
     <View style={Style.viewCenter}>
       <Button
        small
        icon={{name: 'md-checkmark', type: 'ionicon', color: 'white', size: 20}}
        title='LOG IN'
        color='white'
        backgroundColor='#007F83'
        borderRadius={10}
        buttonStyle={{width: 250}}
        onPress={props.login}
       />
       <ErrorMessage errorMessage={props.errorMessage} error={props.error}/>
     </View>
   </ScrollView>
  );
};
export default LoginScene;

