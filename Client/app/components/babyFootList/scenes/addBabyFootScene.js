/**
 * Created by Margot on 19/12/2016.
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
  Modal
} from 'react-native';

import {FormLabel, FormInput, Button} from 'react-native-elements';
import ErrorMessage from '../../componentsHelper/errorMessage';

const AddBabyFootScene = function (props) {
  return (
    <ScrollView>
      <TouchableHighlight
        onPress={props.onCloseModal}
      >
        <Text style={{marginTop: 50, fontSize: 15}}>Close</Text>
      </TouchableHighlight>
      <Text>Create a new baby foot</Text>
      <FormLabel labelStyle={{color: '#007F83'}}>Babyfoot's Name</FormLabel>
      <FormInput onChangeText={props.updateName}
                 value={props.name}
      />
      <Text></Text>
      <Button
        small
        icon={{name: 'check', type: 'evilicon', color: 'white'}}
        title='CREATE'
        color='white'
        backgroundColor='#007F83'
        borderRadius={10}
        buttonStyle={{width: 250}}
        onPress={props.addBabyFoot}
      />
      <ErrorMessage errorMessage={props.errorMessage} error={props.error}/>
    </ScrollView>

  );
};
export default AddBabyFootScene;